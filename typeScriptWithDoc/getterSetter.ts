// A getter method returns the value of the property’s value. A getter is also called an accessor.
// A setter method updates the property’s value. A setter is also known as a mutator.

class Personn{
    private _firstName: string = "fname";
    // private _lastName: string;
    

        get DataPerson():string{
            return `${this._firstName}`
        }

        set DataPerson(fName){
            console.log(fName)
        }
}

let person1 = new Personn();
person1.DataPerson = "tej"
