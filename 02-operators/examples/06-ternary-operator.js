// =====================================================
// 06-ternary-operator.js
// Topics: condition ? a : b, chained ternary, ternary inside
//         template literals, assigning with a ternary
// Run: node 02-operators/examples/06-ternary-operator.js
// =====================================================

// ===== 1. Basic ternary =====
const age = 20;
console.log(age >= 18 ? "adult" : "minor");     // adult

// ===== 2. Chained ternary =====
const score = 72;
const grade =
  score >= 90 ? "A" :
  score >= 75 ? "B" :
  score >= 60 ? "C" : "F";
console.log(grade);                              // C

// ===== 3. Inside a template literal =====
for (const n of [1, 3]) {
  console.log(`You have ${n} item${n === 1 ? "" : "s"}`);
}
// You have 1 item
// You have 3 items

// ===== 4. Assigning a value =====
const isLoggedIn = false;
const message = isLoggedIn ? "Welcome back" : "Please log in";
console.log(message);                            // Please log in

// ===== 5. Ternary vs ?? =====
const username = null;
console.log(username ? username : "Guest");      // Guest (long form)
console.log(username ?? "Guest");                // Guest (shorter, and only for null/undefined)