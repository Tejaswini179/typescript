// A tuple works like an array with some additional considerations:

// The number of elements in the tuple is fixed.
// The types of elements are known, and need not be the same.
// For example, you can use a tuple to represent a value as a pair of a string and a number:

let skill: [string, number];
skill = ['Programming', 5];
console.log(skill)