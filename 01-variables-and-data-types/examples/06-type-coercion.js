// =====================================================
// 06-type-coercion.js
// Topics: implicit type coercion, + vs - behavior,
//         coercion of booleans, null, undefined, arrays and objects,
//         loose equality (==) vs strict equality (===)
// Run: node 01-variables-and-data-types/examples/06-type-coercion.js
// =====================================================

// ===== 1. Implicit coercion: JS converts types automatically =====
console.log("5" + 3);                // "53"   (+ with a string concatenates)
console.log("5" - 3);                // 2      (- forces numbers)
console.log("5" * "2");              // 10     (* forces numbers)

// ===== 2. Booleans, null and undefined =====
console.log(true + 1);               // 2      (true becomes 1)
console.log(null + 1);               // 1      (null becomes 0)
console.log(undefined + 1);          // NaN    (undefined becomes NaN)

// ===== 3. Arrays and objects =====
console.log([] + []);                // ""     (prints an empty line; both become "")
console.log([] + {});                // "[object Object]"

// ===== 4. == (loose, coerces) vs === (strict, no coercion) =====
console.log(1 == "1");               // true
console.log(1 === "1");              // false
console.log(0 == false);             // true
console.log(0 === false);            // false
console.log("" == false);            // true
console.log(null == undefined);      // true
console.log(null === undefined);     // false
console.log(NaN == NaN);             // false (NaN is never equal to anything)

// Rule: always use === and !==