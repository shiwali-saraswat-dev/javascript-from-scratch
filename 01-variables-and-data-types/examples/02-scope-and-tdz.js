// =====================================================
// 02-scope-and-tdz.js
// Topics: block scope, function scope, hoisting, TDZ,
//         var vs let in loops
// Run: node 01-variables-and-data-types/examples/02-scope-and-tdz.js
// =====================================================

// ===== 1. Block scope =====
if (true) {
  var a = "var";
  let b = "let";
  const c = "const";
}
console.log(a);              // var  (var ignores block scope)
console.log(typeof b);       // undefined (let stays inside the block)
console.log(typeof c);       // undefined (const stays inside the block)
// console.log(b);           // ReferenceError: b is not defined
// console.log(c);           // ReferenceError: c is not defined

// ===== 2. Function scope =====
function demo() {
  var inside = "only inside demo";
  return inside;
}
console.log(demo());         // only inside demo
console.log(typeof inside);  // undefined (not visible outside the function)
// console.log(inside);      // ReferenceError: inside is not defined

// ===== 3. Hoisting: var is hoisted and initialized as undefined =====
console.log(x);              // undefined (declaration hoisted, value is not)
var x = 5;
console.log(x);              // 5

// ===== 4. Temporal Dead Zone: let/const are hoisted but not usable before declaration =====
try {
  console.log(y);
} catch (err) {
  console.log(err.name + ": " + err.message);
  // ReferenceError: Cannot access 'y' before initialization
}
// console.log(y);           // uncomment to see the uncaught error
let y = 5;
console.log(y);              // 5

// ===== 5. Classic loop difference: var vs let =====
// var: ONE shared i for the whole loop
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log("var i:", i), 0);
}
console.log("after var loop, i =", i);                  // 3 (var leaks out of the loop)
// var i: 3, var i: 3, var i: 3   (one shared i)

// let: a NEW j for every iteration
for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log("let j:", j), 0);
}
console.log("typeof j after let loop:", typeof j);      // undefined (j stays in the loop)
// let j: 0, let j: 1, let j: 2   (new j per iteration)

// Old-school fix for var: an IIFE gives each iteration its own copy
for (var k = 0; k < 3; k++) {
  (function (copy) {
    setTimeout(() => console.log("iife copy:", copy), 0);
  })(k);
}
// iife copy: 0, iife copy: 1, iife copy: 2

console.log("sync code finished");   // prints BEFORE all setTimeout output