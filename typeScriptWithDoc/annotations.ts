
// let variableName: type;
// let variableName: type = value;
// const constantName: type = value;

let varname:number = 17;
console.log(varname);

let names:string[] = ['hi','hello','hey'];
console.log(names)

//object
let person: {
    name : String,
    age : number
}

person = {
    name :"Tejaswini",
    age:18
}

console.log(person)

let greeting = (name:string) =>{
    console.log(`hi ${name}`)
}
greeting('Tejaswini')

// JavaScript has the Number type (with the letter N in uppercase) that refers to the non-primitive boxed object. You should not use this Number type as much as possible in TypeScript.