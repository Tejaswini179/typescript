// with same name name 
//but different parameter type and rerturn type
//however the number of paramenter shouldbe the same

function add(a:number, b:number):number;
function add(a:string, b:string):string;
function add(a:boolean, b:boolean):boolean;


function add(a:any, b:any) :any{
     return a+b;
}

let s1 = add(10,20);
let s2 = add("hey","hi");
let s3 = add(true,false);
console.log(s1);
console.log(s2);
console.log(s3);
