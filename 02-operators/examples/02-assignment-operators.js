// =====================================================
// 02-assignment-operators.js
// Topics: =, compound assignment (+= -= *= /= %= **=),
//         logical assignment (??= ||= &&=), chained assignment,
//         swapping with destructuring
// Run: node 02-operators/examples/02-assignment-operators.js
// =====================================================

// ===== 1. Compound assignment =====
let n = 10;
n += 5;  console.log(n);             // 15  (n = n + 5)
n -= 3;  console.log(n);             // 12
n *= 2;  console.log(n);             // 24
n /= 4;  console.log(n);             // 6
n %= 4;  console.log(n);             // 2
n **= 3; console.log(n);             // 8

// ===== 2. Logical assignment =====
let a = null;
a ??= "default";                     // assign only if a is null or undefined
console.log(a);                      // default

let b = 0;
b ||= 50;                            // assign only if b is falsy
console.log(b);                      // 50

let c = 1;
c &&= 99;                            // assign only if c is truthy
console.log(c);                      // 99

let d = 0;
d ??= 7;                             // 0 is not null/undefined, so it stays
console.log(d);                      // 0

// ===== 3. Chained assignment =====
let x, y;
x = y = 5;                           // evaluated right to left
console.log(x, y);                   // 5 5

// ===== 4. Swap two variables =====
let p = 1, q = 2;
[p, q] = [q, p];
console.log(p, q);                   // 2 1