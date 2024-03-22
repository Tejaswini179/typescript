// function getProduct(id:number){

//     return{
//          id:id,
//          name : `laptop ${id}`,
//          price:80000

//     }   

// }

// var ProductData = getProduct(1);
// console.log(ProductData);


// const getProduct = (id:number, name:string) =>{

//     console.log(`product name is ${name} and id is ${id}`)

// }

// var ProductData = getProduct(1,"Laptop");

// InterFace
interface Product{
    id:number,
    name:string,
    price:number
}

function getProduct(id:number) : Product{
    return {
      id: id,
      name: `Awesome Gadget ${id}`,
      price: 99.5
    }
  }

const producttt = getProduct(1);
console.log(`The product ${producttt.name} costs ${producttt.price}`);

