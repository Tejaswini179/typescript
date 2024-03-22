// Abstract classes provide a way to define comman properties and methos that multple derived classes can SharedArrayBuffer. This promote code reuse and help establish a common interface for related classes

// Abstract class cannot be instantiated

//Abstract classes focus on class inheritance and sharing comman functionality


abstract class shape {
    protected color : string;
    
  constructor(color: string) {
    this.color = color;
  }

    abstract calculate():number;
    abstract displayArea : () =>  void;
}

class Circle extends shape {

    constructor( protected color : string , protected radius : number){
        super(color);
        this.radius = radius ;
    }

    public calculate():number{
       return Math.PI * this.radius * this.radius;
    }
     public displayArea = () : void => {
      console.log(`radius is ${this.radius} and color is ${this.color}`)
    }
}

let circle = new Circle("red",2);
circle.displayArea();