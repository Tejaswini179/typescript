class Person2 {
    firstname : string;
    lastname: string;

     constructor( firstname : string,lastname: string){
        this.firstname = firstname;
        this.lastname = lastname;
     }

     getData(){
        console.log(this.firstname)
     }
}

const person2Data = new Person2("tejaswini","khengare")
person2Data.getData()

class Student extends Person2 {   

    garde :number;

    constructor(firstname : string,lastname: string,grade:number){
        super(firstname,lastname)
        this.garde = grade
    }
   
    getStudentGrade(grade:number){
        console.log(grade)
    }
    

}
const student = new Student("hi","hello",10)
student.getData()
student.getStudentGrade(10)