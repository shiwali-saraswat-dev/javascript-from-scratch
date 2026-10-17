// =====================================================
// 03-primitive-types.js
// Topics: the 7 primitive types, typeof, number quirks,
//         string immutability, symbols, copy by value
// Run: node 01-variables-and-data-types/examples/03-primitive-types.js
// =====================================================

// ===== 1. The 7 primitive types =====
const str = "Hello";                 // string
const num = 42;                      // number (integers and decimals)
const isActive = true;               // boolean
let notAssigned;                     // undefined
const empty = null;                  // null (intentional "no value")
const big = 9007199254740993n;       // bigint
const id = Symbol("id");             // symbol

console.log(typeof str);             // string
console.log(typeof num);             // number
console.log(typeof isActive);        // boolean
console.log(typeof notAssigned);     // undefined
console.log(typeof empty);           // object  (a famous historical bug)
console.log(typeof big);             // bigint
console.log(typeof id);              // symbol

// ===== 2. Number quirks =====
console.log(0.1 + 0.2);                          // 0.30000000000000004
console.log((0.1 + 0.2).toFixed(2));             // 0.30 (a string, rounded)
console.log(Number.MAX_SAFE_INTEGER);            // 9007199254740991
console.log(9007199254740991n + 2n);             // 9007199254740993n (bigint stays exact)
console.log(1 / 0);                              // Infinity
console.log("abc" * 2);                          // NaN
console.log(NaN === NaN);                        // false (NaN is never equal to itself)
console.log(Number.isNaN(NaN));                  // true  (the correct NaN check)

// ===== 3. Strings are immutable =====
let word = "cat";
word[0] = "b";                                   // silently ignored (throws in strict mode)
console.log(word);                               // cat
word = "bat";                                    // reassigning the variable is fine
console.log(word);                               // bat

// ===== 4. Symbols are always unique =====
console.log(Symbol("id") === Symbol("id"));      // false

// ===== 5. Primitives are copied by value =====
let p = 10;
let q = p;
q = 20;
console.log(p, q);                               // 10 20