// A TypeScript union type allows you to store a value of one or several types in a variable.

var t : number | string;
t = "tejaswini";
console.log(t)
t = 171112
console.log(t)

function add(a:number | string, b:number | string){

  if( typeof(a) === "number" && typeof(b) === "number"){
    console.log(a+b)
  }
  else if ( typeof(a) === "string" && typeof(b) === "string"){
    console.log(a+" "+b)
  }
  else{
    console.log(`a is ${a} and b is ${b}`)
  }

}

add(10,"hi")