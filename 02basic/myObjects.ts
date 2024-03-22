// const User = {
//     name : "Tejaswini",
//     email : "tejaswini@gmail.com",
//     inActive : true
// }

// function createUser({name:string,ispaid:boolean}){}

// createUser({name:"Tejaswini", ispaid:false})

// // () ------- function parameter
// // :{} ------ return type
// // {} ------- function defination
// // function createCourse():{}{}

// function createCourse():{name:string,price:number}{
//     return {name:"c",price:2000}
// }

// type User = {
//     name : string;
//     email : string;
//     isActive : boolean
// } 

// function createUsers(user:User):User{
//       return {name:"", email:"",isActive:false}
// }
// createUsers({name:"", email:"",isActive:false})

type User = {
    readonly _id : number, //readonly make only readalble id
    name : string,
    email : string,
    isACtive : boolean
    credCardDetails ?: number // ? make optional filed
}

let myUser : User = {
    _id : 12,
    name : "Tejaswini",
    email: "t@gmail.com",
    isACtive : true,
}


type cardNumber = {
    cardNumber : number
}

type cardDate = {
    cardDate : string
}

type cardDetails = cardNumber & cardDate & {
    cvv : number
}