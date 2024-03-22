class Person {
    firstname : string;
    lastname : string;

       constructor(firstname:string, lastname:string){
            this.firstname = firstname;
            this.lastname = lastname
       }

         getData() {
            return `firstname is ${this.firstname} and lastname is ${this.lastname}`
          }
}

let person = new Person("Tejaswini","khengare");
console.log(person.getData)

// The private modifier allows access within the same class.
// The protected modifier allows access within the same class and subclasses.
// The public modifier allows access from any location.
