// =====================================================
// 08-special-operators.js
// Topics: in, delete, instanceof, void, comma operator,
//         spread, optional chaining
// Run: node 02-operators/examples/08-special-operators.js
// =====================================================

// ===== 1. in: does a property exist? =====
const user = { name: "Asha", age: 25 };
const arr = [10, 20];
console.log("name" in user);        // true
console.log("email" in user);       // false
console.log(0 in arr);              // true  (index 0 exists)
console.log(5 in arr);              // false

// ===== 2. delete: remove a property =====
console.log(delete user.age);       // true
console.log(user);                  // { name: 'Asha' }

// ===== 3. instanceof =====
class Animal {}
class Dog extends Animal {}
const d = new Dog();
console.log(d instanceof Dog);      // true
console.log(d instanceof Animal);   // true  (checks the whole prototype chain)
console.log(d instanceof Object);   // true
console.log(d instanceof Array);    // false

// ===== 4. void and the comma operator =====
console.log(void 0);                // undefined (void always returns undefined)
const result = (1, 2, 3);           // evaluates each, returns the last
console.log(result);                // 3

// ===== 5. Spread =====
console.log([...[1, 2], 3]);               // [ 1, 2, 3 ]
console.log(Math.max(...[3, 9, 4]));       // 9
console.log({ ...{ a: 1 }, ...{ b: 2 } }); // { a: 1, b: 2 }

// ===== 6. Optional chaining =====
const profile = { address: null };
console.log(profile.address?.city);        // undefined (no crash)
console.log(profile.getName?.());          // undefined (method does not exist)