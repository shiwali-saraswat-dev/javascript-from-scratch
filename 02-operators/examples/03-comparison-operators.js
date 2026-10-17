// =====================================================
// 03-comparison-operators.js
// Topics: > < >= <=, == vs ===, != vs !==, string comparison,
//         null/undefined comparisons, NaN and Object.is
// Run: node 02-operators/examples/03-comparison-operators.js
// =====================================================

// ===== 1. Relational operators =====
console.log(5 > 3);                  // true
console.log(5 >= 5);                 // true
console.log(5 < 3);                  // false
console.log(5 <= 4);                 // false

// ===== 2. Equality: loose vs strict =====
console.log(5 == "5");               // true  (coerces types)
console.log(5 === "5");              // false (types differ)
console.log(5 != "5");               // false
console.log(5 !== "5");              // true

// ===== 3. Comparing strings =====
console.log("apple" < "banana");     // true  (compared character by character)
console.log("a" < "B");              // false (lowercase "a" = 97, uppercase "B" = 66)
console.log("10" < "9");             // true  (text comparison: "1" comes before "9")
console.log(10 < 9);                 // false (numeric comparison)
console.log("10" < 9);               // false (string becomes a number)

// ===== 4. null and undefined =====
console.log(null >= 0);              // true  (>= converts null to 0)
console.log(null > 0);               // false
console.log(null == 0);              // false (== has special rules for null)
console.log(undefined == 0);         // false
console.log(undefined > 0);          // false (undefined becomes NaN)

// ===== 5. NaN and -0 =====
console.log(NaN === NaN);            // false
console.log(Object.is(NaN, NaN));    // true
console.log(0 === -0);               // true
console.log(Object.is(0, -0));       // false

// Rule: use === and !== by default