// =====================================================
// 04-logical-operators.js
// Topics: && || !, short-circuit evaluation, operators return
//         operands (not booleans), ?? vs ||, guard pattern
// Run: node 02-operators/examples/04-logical-operators.js
// =====================================================

// ===== 1. Basic logic =====
console.log(true && false);          // false
console.log(true || false);          // true
console.log(!true);                  // false

// ===== 2. && and || return an operand, not always a boolean =====
console.log("hello" && 42);          // 42      (first is truthy, so returns the second)
console.log('"" && 42 ->', JSON.stringify("" && 42));  // "" (first is falsy, stops there)
console.log(0 || "fallback");        // fallback (first is falsy, so returns the second)
console.log("a" || "b");             // a       (first is truthy, stops there)
console.log(null || undefined || "last");  // last (returns the first truthy, or the last value)
console.log(1 && 2 && 3);            // 3       (all truthy, returns the last)
console.log(1 && 0 && 3);            // 0       (stops at the first falsy)

// ===== 3. Short-circuit evaluation =====
function log(msg) {
  console.log("called", msg);
  return true;
}
false && log("A");                   // log is never called
true || log("B");                    // log is never called
true && log("C");                    // called C

// ===== 4. ?? only replaces null and undefined =====
console.log(0 || 10);                // 10  (0 is falsy)
console.log(0 ?? 10);                // 0   (0 is a real value)
console.log(null ?? "default");      // default
console.log(undefined ?? "default"); // default
console.log('"" ?? "x" ->', JSON.stringify("" ?? "x"));  // "" (empty string is kept)

// ===== 5. Guard pattern and !! =====
const user = { name: "Asha" };
user && console.log(user.name);      // Asha (runs only if user exists)
console.log(!!"text");               // true
console.log(!!0);                    // false