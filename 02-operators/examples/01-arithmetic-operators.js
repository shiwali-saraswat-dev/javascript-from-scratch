// =====================================================
// 01-arithmetic-operators.js
// Topics: + - * / % **, remainder sign rules, division edge cases,
//         integer division, unary + and -, + with strings
// Run: node 02-operators/examples/01-arithmetic-operators.js
// =====================================================

// ===== 1. Basic arithmetic =====
console.log(10 + 3);                 // 13
console.log(10 - 3);                 // 7
console.log(10 * 3);                 // 30
console.log(10 / 3);                 // 3.3333333333333335
console.log(10 % 3);                 // 1  (remainder)
console.log(2 ** 3);                 // 8  (exponent)

// ===== 2. Remainder (%) =====
console.log(-7 % 3);                 // -1 (result takes the sign of the dividend)
console.log(7 % -3);                 // 1
console.log(5.5 % 2);                // 1.5 (works on decimals too)
console.log(8 % 2 === 0);            // true  (even check)
console.log(7 % 2 === 0);            // false

// ===== 3. Division edge cases =====
console.log(10 / 0);                 // Infinity
console.log(-10 / 0);                // -Infinity
console.log(0 / 0);                  // NaN
console.log(10 % 0);                 // NaN

// ===== 4. Integer division =====
console.log(Math.floor(10 / 3));     // 3
console.log(Math.trunc(-7 / 2));     // -3 (cuts off the decimal part)
console.log(Math.floor(-7 / 2));     // -4 (rounds down)

// ===== 5. Exponent (**) =====
console.log(2 ** 3 ** 2);            // 512 (right to left: 3 ** 2 = 9, then 2 ** 9)
console.log((-2) ** 2);              // 4
// console.log(-2 ** 2);             // SyntaxError: needs parentheses

// ===== 6. Unary + and - =====
console.log(+"5");                   // 5
console.log(-"5");                   // -5
console.log(+true);                  // 1
console.log(+"abc");                 // NaN

// ===== 7. + with strings =====
console.log("Hello" + " " + "World"); // Hello World
console.log("5" + 3);                // 53
console.log(5 + 3 + "px");           // 8px   (left to right: 5 + 3 first)
console.log("px" + 5 + 3);           // px53  (string first, so everything concatenates)