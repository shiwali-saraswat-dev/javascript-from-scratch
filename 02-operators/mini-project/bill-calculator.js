// =====================================================
// bill-calculator.js
// Topics used: arithmetic, comparison, ternary, default parameters
// Run: node 02-operators/mini-project/bill-calculator.js
// =====================================================

function calculateBill({ subtotal, tipPercent = 10, people = 1, taxPercent = 5 }) {
  if (!(subtotal > 0) || !(people >= 1)) {
    return { error: "Invalid subtotal or number of people" };
  }

  const tax = (subtotal * taxPercent) / 100;
  const tip = (subtotal * tipPercent) / 100;
  const total = subtotal + tax + tip;
  const perPerson = total / people;

  return {
    total: total.toFixed(2),
    perPerson: perPerson.toFixed(2),
    verdict: tipPercent >= 15 ? "generous" : tipPercent >= 10 ? "standard" : "low",
  };
}

const bills = [
  { subtotal: 1200, tipPercent: 15, people: 4 },
  { subtotal: 850, people: 2 },
  { subtotal: 300, tipPercent: 5, people: 3 },
];

bills.forEach((bill, i) => {
  const r = calculateBill(bill);
  console.log(`Bill ${i + 1}: total ${r.total}, per person ${r.perPerson} (${r.verdict} tip)`);
});