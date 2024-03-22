// function abc<a,b>(obj1 : a, obj2 :b){
//      return{
//         ...obj1,
//         ...obj2
//      }
// }
// let abcfunCall = abc(
//                         {name:"Tejaswini"},
//                       2
//                     )

// console.log(abcfunCall)

// in Above exaample even i have't pass object then also it won't throw any error so for that will use Generic Constrain

// function abc<a extends object,b extends object>(obj1 : a, obj2 :b){
//      return{
//         ...obj1,
//         ...obj2
//      }
// }
// let abcfunCall = abc(
//                         {name:"Tejaswini"},
//                          {surname:"khengare"}
//                     )

// console.log(abcfunCall)

// also i can give key as second parameter as follow

function abc<a extends object,b extends keyof a>(obj1 : a, key :b){
     return obj1[key]
     
}
let abcfunCall = abc({name:"Tejaswini"}, 'name')

console.log(abcfunCall)

// Use extends keyword to constrain the type parameter to a specific type.
// Use extends keyof to constrain a type that is the property of another object.
