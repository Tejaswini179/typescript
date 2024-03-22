// In summary, void is used to indicate functions that do not return a value, while never is used to represent values or behaviors that never occur. They serve different purposes and are used in different contexts within TypeScript.

// The never type contains no value.
// The never type represents the return type of a function that always throws an error or a function that contains an indefinite loop.

function throwError(message: string): never {
    throw new Error(message);
}

function infiniteLoop(): never {
    while (true) {
        // Do something indefinitely
    }
}
throwError("erooor")
// let result: never;
// infiniteLoop()

// function unreachableCode(): never {
//     throw new Error("This code is unreachable");
// }

// if (Math.random() > 0.5) {
//     result = 10; // Error: Type '10' is not assignable to type 'never'
// } else {
//     unreachableCode(); // This line is unreachable
//     result = 20; // This line will never be executed
// }
