// =====================================================
// 01-var-let-const.js
// Topics: var vs let vs const, redeclaration, reassignment,
//         const with objects, const initialization rule
// Run: node 01-variables-and-data-types/examples/01-var-let-const.js
// =====================================================

// var: function-scoped, can be redeclared and reassigned
var city = "Delhi";
var city = "Noida";          // allowed (redeclaration)
city = "Gurugram";           // allowed (reassignment)
console.log(city);           // Gurugram

// let: block-scoped, can be reassigned, NOT redeclared
let score = 10;
score = 20;
console.log(score);          // 20
// let score = 30;           // SyntaxError: Identifier 'score' has already been declared

// const: block-scoped, cannot be reassigned or redeclared
const PI = 3.14159;
// PI = 3;                   // TypeError: Assignment to constant variable.

// const does NOT make objects/arrays immutable, only the binding
const user = { name: "Asha" };
user.name = "Ravi";          // allowed, mutating the object
console.log(user);           // { name: 'Ravi' }
// user = {};                // TypeError

// Must initialize const at declaration
// const x;                  // SyntaxError: Missing initializer in const declaration