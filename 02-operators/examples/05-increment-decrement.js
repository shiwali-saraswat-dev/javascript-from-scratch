// =====================================================
// 05-increment-decrement.js
// Topics: ++ and -- (prefix vs postfix), evaluation order trap,
//         ++ on strings, common use cases
// Run: node 02-operators/examples/05-increment-decrement.js
// =====================================================

// ===== 1. Postfix vs prefix =====
let i = 5;
console.log(i++);                    // 5  (returns the old value, then adds 1)
console.log(i);                      // 6
console.log(++i);                    // 7  (adds 1 first, then returns the new value)
console.log(i);                      // 7
console.log(i--);                    // 7  (returns the old value, then subtracts 1)
console.log(i);                      // 6
console.log(--i);                    // 5
console.log(i);                      // 5

// ===== 2. Evaluation order trap =====
let a = 5;
let b = a++ + ++a;                   // 5 + 7: a++ gives 5 (a becomes 6), ++a gives 7
console.log(a, b);                   // 7 12

// ===== 3. ++ converts to a number =====
let s = "5";
s++;
console.log(s, typeof s);            // 6 number
let t = "abc";
t++;
console.log(t);                      // NaN

// ===== 4. Practical use =====
let count = 0;
count++;
count++;
count--;
console.log(count);                  // 1

const letters = ["a", "b", "c"];
let idx = 0;
console.log(letters[idx++], letters[idx++]);  // a b
console.log(idx);                    // 2