interface user {
    firstname : string;
    lastname : string;
}

interface teacher {
    subject : string;
}

interface  student{
    className : string;
}

type s1 = user & student;

let st1 : s1 = {
    firstname : "Tejaswini",
    lastname : "khengare",
    className : "10th"
}
console.log(st1)

type t1 = user & teacher

let te1 : t1 = {
    firstname : "Tejaswini",
    lastname : "khengare",
    subject : "c++"
}
console.log(te1)