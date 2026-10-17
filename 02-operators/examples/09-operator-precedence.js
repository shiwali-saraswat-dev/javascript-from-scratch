// =====================================================
// 09-operator-precedence.js
// Topics: precedence, associativity, parentheses,
//         classic interview traps
// Run: node 02-operators/examples/09-operator-precedence.js
// =====================================================

// ===== 1. Precedence: some operators bind tighter =====
console.log(2 + 3 * 4);               // 14 (* before +)
console.log((2 + 3) * 4);             // 20 (parentheses win)
console.log(true || false && false);  // true  (&& before ||)
console.log((true || false) && false);// false

// ===== 2. Associativity: order between equal operators =====
console.log(10 - 4 - 3);              // 3   (left to right: (10 - 4) - 3)
console.log(2 ** 3 ** 2);             // 512 (right to left: 2 ** (3 ** 2))

// ===== 3. Interview traps =====
console.log(1 + 2 + "3");             // 33   (3 + "3")
console.log("1" + 2 + 3);             // 123  ("12" + 3)
console.log(1 + +"2");                // 3    (unary + first)
console.log(3 > 2 > 1);               // false ((3 > 2) is true, then true > 1 means 1 > 1)
console.log(1 < 2 < 3);               // true  ((1 < 2) is true, then true < 3 means 1 < 3)
console.log(!true == false);          // true  (! first: false == false)

let x = 5;
console.log(x++ * 2, x);              // 10 6

// console.log(null ?? "a" || "b");   // SyntaxError: mixing ?? with || needs parentheses
// console.log(-2 ** 2);              // SyntaxError: needs parentheses