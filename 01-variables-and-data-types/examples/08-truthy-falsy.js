// =====================================================
// 08-truthy-falsy.js
// Topics: the 8 falsy values, truthy surprises, default values
//         with ||, || vs ??, optional chaining (?.)
// Run: node 01-variables-and-data-types/examples/08-truthy-falsy.js
// =====================================================

// ===== 1. The 8 falsy values. Everything else is truthy. =====
const falsyValues = [false, 0, -0, 0n, "", null, undefined, NaN];
falsyValues.forEach((v) => console.log(String(v).padEnd(10), "->", Boolean(v)));
// every line prints false

// ===== 2. Truthy surprises =====
console.log(Boolean("0"));            // true  (non-empty string)
console.log(Boolean("false"));        // true  (non-empty string)
console.log(Boolean([]));             // true  (empty array)
console.log(Boolean({}));             // true  (empty object)
console.log(Boolean(function () {})); // true

// ===== 3. Real-world use: default values with || =====
const name = "";
console.log(name || "Guest");         // Guest

// ===== 4. || vs ??  (?? only replaces null/undefined) =====
const count = 0;
console.log(count || 10);             // 10  (0 is falsy, so it is wrongly replaced)
console.log(count ?? 10);             // 0   (0 is a valid value)

// ===== 5. Optional chaining =====
const profile = { address: null };
console.log(profile.address?.city);   // undefined (no crash)
// console.log(profile.address.city); // TypeError: Cannot read properties of null