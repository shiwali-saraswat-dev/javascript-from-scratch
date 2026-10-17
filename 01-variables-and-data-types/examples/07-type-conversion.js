// =====================================================
// 07-type-conversion.js
// Topics: explicit type conversion to Number, String and Boolean,
//         Number() vs parseInt() vs parseFloat(), unary plus,
//         String() vs toString(), double-bang (!!)
// Run: node 01-variables-and-data-types/examples/07-type-conversion.js
// =====================================================

// Explicit conversion: you decide the type, JS doesn't guess

// ===== 1. To Number with Number() =====
console.log(Number("42"));           // 42
console.log(Number("3.14"));         // 3.14
console.log(Number(""));             // 0     (empty string becomes 0)
console.log(Number("12px"));         // NaN   (the whole string must be numeric)
console.log(Number(true));           // 1
console.log(Number(null));           // 0
console.log(Number(undefined));      // NaN
console.log(typeof Number("42"));    // number

// ===== 2. To Number with parseInt() and parseFloat() =====
console.log(parseInt("42px"));       // 42    (reads digits until the first invalid character)
console.log(parseFloat("3.14abc"));  // 3.14
console.log(parseInt("abc"));        // NaN   (no leading digits)

// ===== 3. Unary plus shortcut =====
console.log(+"7");                   // 7     (same as Number("7"))

// ===== 4. To String =====
console.log(String(123));            // "123"
console.log((123).toString());       // "123"
console.log(String(null));           // "null"
console.log(String(true));           // "true"
console.log(`${[1, 2, 3]}`);         // "1,2,3"
console.log(typeof String(123));     // string

// ===== 5. To Boolean =====
console.log(Boolean(""));            // false
console.log(Boolean("0"));           // true  (non-empty string)
console.log(Boolean(0));             // false
console.log(!!"hello");              // true  (double-bang shortcut)