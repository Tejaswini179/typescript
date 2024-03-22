class Example {
    static subject : string = "English";
    firstname : string;
    lastname : string;

       constructor(firstname:string, lastname:string){
            this.firstname = firstname;
            this.lastname = lastname
            Example.subject
       }

          static getData(firstname : string , lastname : string) {
            return `firstname is ${firstname} and lastname is ${lastname}`
          }
}

let example = new Example("Tejaswini","khengare");
console.log(Example.subject)
console.log(example)