/*
There two of data types in JavaScript:
 - Primitive data type (Call by value)
 - Non Primitive data types or Reference data types (Call by reference)

Primitive Data types:
 - String -> To store String type data
 - Number -> To store numbers
 - Boolean -> Stores true or false
 - BigInt -> To store values greater than 2^53-1. The most commong way of creating a     BigInt is by adding the letter n at the end of integer literal, for eg 205n, 10n
 - null -> null is a datatype in JS. It does not represent zero or empty string. null means no value is intentionally present. On printing typeOf null in JS, it gives answer as object type which is a bug in JS.
 - undefined -> Undefined is a primitive data type in JS. It means that value has not been assigned yet to a variable.
 - Symbol -> Symbol is a primitive data type, which use to set an identifier unique. Even though the value of two identifiers can be same, but if they are set as Symbol, they will not be equal in JS upon comparing. They check whether both sides refer to the exact same symbol (not just having the same description). Each call creates a new unique symbol.

Non Primitive data types:
 - Array -> To store multiple values. Different datatypes values can be stored in array but it is best practice not to do so. Created using [].
 - Object -> An object type is created using {}.
 - Function -> In JS functions are special type of object. A function is not just excutable code, it's also a value that can be assigned to variables, passed as arguments or returned from another function. Both function in JavaScript and def in Python are similar as they are used to define reusable blocks of code that can take inputs (parameters), perform some operations, and return outputs. But their are some important differences in syntax and behaviours.
 function hello() {}
 hello.language = "JavaScript";

 console.log(hello.language); // "JavaScript"
 
 So hello is both:
 callable (you can run it: hello()), and an object (you can store properties on it).
 That’s why:
 Functions are first-class objects in JavaScript.
*/

let bigNum = 10n;
console.log(typeof bigNum); // bigint

const noVal = null;
console.log(typeof noVal); // object

const id = Symbol(123);
const sameId = Symbol(123);

console.log(id == sameId); // false
console.log(id === sameId); // false
console.log(typeof sameId); // symbol

const heros = ["Ironman",1, true];
console.log(typeof heros); // object
console.log(heros); // [ 'Ironman', 1, true ]

let myObj = {
    name:"Jhon",
    age:25
};

console.log(typeof myObj); // object
console.log(myObj); // { name: 'Jhon', age: 25 }

// No return statement
const myFunc = function(){
    console.log("Hello World")
};
 // IMPORTANT -> if return is omitted , JS returns undefined 
console.log(typeof myFunc); // function
console.log(myFunc()); // Hello World, undefined

// With return statement
const withReturn = function(){
    return "Hello World"
};

console.log(typeof withReturn); // function
console.log(withReturn()); // Hello World
