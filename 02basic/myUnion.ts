let score : number | string | boolean= 33
score = 44;
score = false;


type Uuser = {
    name : string
    id : number
}

type Admin = {
    username : string,
    id : number
}

let dataUser:Uuser | Admin = {name:"tejaswini",id:12}

dataUser = {username :"tk",id:12}

const Data : (string | number) [] = ['1','2','3'] //number| string all array

let seatAllotment : "aisle" | "middle" | "window" // only allowcated this variable for 3 options
