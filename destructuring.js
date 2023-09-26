//Destructuring practise
//Example1 --> Basic variable assignment
const fruits = ["Orange", "Apple", "Guva"];
const [a, b, c] = fruits;
console.log(`a: ${a}, b: ${b}, c: ${c}`);

//Example2 --> When more variables are defined than the length of array, other variables be left as undefined.
const products = ["Samsung S21 Ultra", "Airpods", "Lava Agni"];
const [mobile, boult, laptop, macBook] = products;
console.log(`Mobile: ${mobile}, Boult: ${boult}, Laptop: ${laptop}, MacBook: ${macBook}`); //MacBook is undefined as there are no values present in products array.

//Example3 --> using rest operator
const [phone, ...others] = products;
console.log(`Phone: ${phone}, Others: ${others}`);

//Example4 --> Computed object property names and destructuring
const lastAlphabet = "z";
const { [lastAlphabet]: liquor } = { z: "bar" };
console.log("Where do I get boosed? " +  liquor); //Output: bar

//Example5 --> Combined array and object destructuring
const props = [
    { id: 1, name: "Raj" },
    { id: 2, name: "Vijay" },
    { id: 3, name: "Gautam" },
  ];
const [, , { name }] = props;  //as the first two element is left empty only Gautam will be printed
console.log(`Name: ${name}`);
  
