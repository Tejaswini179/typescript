// It is a good practice to add the void type as the return type of a function or a method that doesn’t return any value. By doing this, you can gain the following benefits:

// Improve clarity of the code: you do not have to read the whole function body to see if it returns anything.
// Ensure type-safe: you will never assign the function with the void return type to a variable.
// Notice that if you use the void type for a variable, you can only assign undefined to that

function simpleFunc() :void{
    console.log("hi")
}

simpleFunc()