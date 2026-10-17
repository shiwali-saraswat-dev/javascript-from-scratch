// =====================================================
// 05-typeof-and-type-checking.js
// Topics: typeof operator and its quirks, reliable type checks,
//         Array.isArray, Number.isNaN, Number.isInteger,
//         precise type detection with Object.prototype.toString
// Run: node 01-variables-and-data-types/examples/05-typeof-and-type-checking.js
// =====================================================

// ===== 1. The typeof operator =====
console.log(typeof "hi");            // string
console.log(typeof 10);              // number
console.log(typeof true);            // boolean
console.log(typeof undefined);       // undefined
console.log(typeof function () {});  // function
console.log(typeof {});              // object
console.log(typeof []);              // object   (arrays are objects)
console.log(typeof null);            // object   (bug)
console.log(typeof notDeclared);     // undefined (typeof never throws on undeclared names)

// ===== 2. Reliable checks =====
const maybeNull = null;
console.log(Array.isArray([]));                              // true
console.log(Array.isArray({}));                              // false
console.log(maybeNull === null);                             // true  (check null directly)
console.log(Number.isNaN(NaN));                              // true
console.log(Number.isInteger(5));                            // true
console.log(Number.isInteger(5.5));                          // false

// ===== 3. The most precise type check =====
const getType = (v) => Object.prototype.toString.call(v).slice(8, -1);
console.log(getType([]));            // Array
console.log(getType({}));            // Object
console.log(getType(null));          // Null
console.log(getType(new Date()));    // Date
console.log(getType(/abc/));         // RegExp
console.log(getType(42));            // Number