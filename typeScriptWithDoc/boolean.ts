// // NOT operator
// const pending: boolean = true;
// const notPending = !pending; // false
// console.log(result); // false

// AND operator
const hasError: boolean = false;
const completed: boolean = true;

// OR operator
let result = completed && hasError; 
console.log(result); // false

result = completed || hasError; 
console.log(result); // true