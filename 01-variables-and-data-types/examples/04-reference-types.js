// =====================================================
// 04-reference-types.js
// Topics: objects and arrays as references, reference equality,
//         shallow copy with spread, mutation through functions
// Run: node 01-variables-and-data-types/examples/04-reference-types.js
// =====================================================

// ===== 1. Objects, arrays and functions are reference types =====
const original = { name: "Asha", age: 25 };
const copy = original;               // copies the reference, not the object
copy.age = 99;
console.log(original.age);           // 99  (both point to the same object)

// ===== 2. Equality compares references, not contents =====
// console.log({} === {});              // false (two different objects)
// console.log([1, 2] === [1, 2]);      // false (two different arrays)
console.log(original === copy);      // true  (same reference)

// ===== 3. Make a real (shallow) copy =====
const cloned = { ...original };
cloned.age = 30;
console.log(original.age, cloned.age);   // 99 30

// ===== 4. Arrays behave the same way =====
const nums = [1, 2, 3];
const alias = nums;
alias.push(4);
console.log(nums);                   // [ 1, 2, 3, 4 ]

const numsCopy = [...nums];
numsCopy.push(5);
console.log(nums.length, numsCopy.length);   // 4 5

// ===== 5. A reference passed to a function =====
function birthday(person) {
  person.age++;                      // mutates the caller's object
}
birthday(original);
console.log(original.age);           // 100