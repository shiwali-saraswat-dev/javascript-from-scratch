// =====================================================
// 07-bitwise-operators.js
// Topics: & | ^ ~ << >> >>>, viewing binary, even/odd check,
//         truncating with ~~, permission flags
// Run: node 02-operators/examples/07-bitwise-operators.js
// =====================================================

// ===== 1. The operators =====
console.log(5 & 3);                  // 1   (0101 & 0011 = 0001)
console.log(5 | 3);                  // 7   (0101 | 0011 = 0111)
console.log(5 ^ 3);                  // 6   (0101 ^ 0011 = 0110)
console.log(~5);                     // -6  (flips all bits: -(n + 1))
console.log(5 << 1);                 // 10  (shift left = multiply by 2)
console.log(5 >> 1);                 // 2   (shift right = divide by 2)
console.log(-5 >> 1);                // -3  (keeps the sign)
console.log(-5 >>> 1);               // 2147483645 (fills with zeros, result is never negative)

// ===== 2. Viewing binary =====
console.log((5).toString(2).padStart(4, "0"));        // 0101
console.log((3).toString(2).padStart(4, "0"));        // 0011
console.log((5 & 3).toString(2).padStart(4, "0"));    // 0001

// ===== 3. Even or odd =====
console.log((7 & 1) === 1);          // true  (last bit is 1, so odd)
console.log((8 & 1) === 1);          // false (last bit is 0, so even)

// ===== 4. Truncating decimals =====
console.log(~~7.9);                  // 7
console.log(~~-7.9);                 // -7
console.log(7.9 | 0);                // 7
// Only safe for numbers inside the 32-bit range. Prefer Math.trunc().

// ===== 5. Permission flags =====
const READ = 1, WRITE = 2, EXECUTE = 4;
let perm = READ | WRITE;                               // 3
console.log(perm & WRITE ? "can write" : "cannot write");      // can write
console.log(perm & EXECUTE ? "can execute" : "cannot execute"); // cannot execute
perm |= EXECUTE;                                       // add a flag: 7
perm &= ~WRITE;                                        // remove a flag: 5
console.log(perm);                                     // 5