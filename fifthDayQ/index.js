
// Q .1 What is the for-in loop in JavaScript? Give its syntax

// Ans=>There are also other types of loops. The for..in loop in JavaScript allows 
// you to iterate over all property keys of an object.
// The syntax of the for...in loop is: for (key in object)

// Eg . 
      let obj={
        Name:"kumbhar",
        age:25,
      }

      for(let key in obj){
        console.log(key , obj[key])
      }

      let test2=["kk",'kfkf',22]
      for (let i in test2){
        console.log(i)
      }

// Q .2  Explain Local Scope, Block Scope, Functional Scope and Scope Chain in javascript

// Ans=> Global scope: Variables declared outside of all functions are known as global variables
//                     and in the global scope. Global variables are accessible anywhere in the program.

// Function scope: Variables that are declared inside a function are called local variables
//                 and in the function scope. Local variables are accessible anywhere inside the function. 

// Block scope: Variable that is declared inside a specific block & can’t be accessed outside
//              of that block. In order to access the variables of that specific block, we need to create object for it

// Scope chain: Whenever our code tries to access a variable during the function call, it starts the searching from local 
//    variables. And if the variable is not found, it’ll continue searching in its outer scope or parent functions’ scope
//    until it reaches the global scope and completes searching for the variable there. Searching for any variable happens 
//    along the scope chain or in different scopes until we get the variable. If the variable is not found in the
//    global scope as well, a reference error is thrown. 


const name = "kumbhar";
 
function introduceMyself(kk) {
  const audience = "Everyone";
 
  function introduce() {
    console.log(`${kk} ${audience}, This is ${name} Learning`);
  }
 
  introduce();
}
 
introduceMyself("Hello");

// Output:

// Hello Everyone, This is kumbhar Learning


// Q .3 What is difference between null and undefined and where to use what?

// Ans=>
// Null: is used to represent an intentional absence of value. It represents a variable whose
//  value is undefined. It accepts only one value, which is null. The Null keyword is used to define 
// the Null type in TypeScript, but it is not useful because we can only assign a null value to it.

// Example:
        let A= null;
        console.log(A)   //output:  Null.

//  Undefined
        // It represents uninitialized variables in TypeScript and JavaScript. It has only one value,
        //  which is undefined. The undefined keyword defines the undefined type in TypeScript, 
        // but it is not useful because we can only assign an undefined value to it.
        // 
//  Example:
        let B ;
        console.log(B)  //output: undefined.

// Q .4 what is Symbol?

// Ans=>Symbol is a built-in object whose constructor returns a symbol primitive — also called 
// a Symbol value or just a Symbol — that's guaranteed to be unique. Symbols are often used to 
//  unique property keys to an object that won't collide with keys any other code might add to
//   the object, and which are hidden from any mechanisms other code will typically use to access the object

// immutable means something that cannot be changed and unique. 

// Ex . 
    //    const val = symbol(1);
    //    const val2 = symbol(1);

    //    console.log(val == val2)

// Q .5 Write code to explain map and filter in arrays

// Map
// The map() method is used for creating a new array from an existing one, applying a function to 
// each one of the elements of the first array.

// Example:In the following example, each number in an array is doubled.

const number = [1, 2, 3, 4];
const doubled = number.map(item => item * 2);
console.log(doubled); // [2, 4, 6, 8]

// Filter:
// The filter() method takes each element in an array and it applies a conditional statement against it. If this conditional returns
//  true, the element gets pushed to the output array. If the condition returns false, the element 
// does not get pushed to the output array.
// Eg . 
const numbers = [1, 2, 3, 4];
const evens = numbers.filter(item => item % 2 === 0);
console.log(evens); // [2, 4]


// Q .6 Explain passed by value and passed by reference

// Ans=> In JavaScript, when a function is called, the arguments can be passed in two ways, either Pass by value or 
// Pass by reference (address). Primitive data types such as string, number, null, undefined, and boolean,
//  are passed by value while non-primitive data types such as objects, arrays, and functions are passed by 
//  reference in Javascript

//   Eg . pass by reference:

let i = 0;
function increment(x) {
   x = x + 1
   console.log(x)
}
increment(i)
console.log(i)
// Output :1

// Q .7 Please explain Self Invoking Function and its code

// Ans=> JavaScript Self invoking functions are nameless self-executing functions and invoked immediately
//       after defining it. These self-invoking functions are man-made, these functions will execute
//       automatically when followed by ().

// eg . 
      (function func(){
console.log("self invoking function")
      })()