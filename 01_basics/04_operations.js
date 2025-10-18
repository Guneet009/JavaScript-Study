let value = 3;
let negValue = -value;
console.log(negValue); //-3

/*
console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3); // 2 raise to power 3
console.log(2/2);
console.log(2%2);
*/

let str1 = "Hello";
let str2 = " World";

let str3 = str1 + str2; // only addition works on string
let str4 = str1 - str2; // same for other operations except addition
console.log(str3); // Hello World
console.log(str4); // NaN
/*
If a string is present at begining then whole operation will be like string addition.
If a Number operation is present before string then Number operation will be carried out and then String addition will happen like in below examples.
*/

console.log("1"+2); // 12 
console.log(1+"2"); // 12
console.log("1"+2+2); // 122
console.log(1+2+"2"); //32

/*
BUT if any other operation is present like -,*,/ etc then that operation will be carried out and then String addition will happen.
*/
console.log(1+"2"+3-3); //120
console.log(1+"2"+3*3); //129
/*
In below examples since String is not adding but multiplying(or any other operation) the whole operation is calculated like Number operation
*/
console.log(1+2+"4"*4); // 3 + 16 = 19
console.log("2"**2+4/"2"); // 4 + 2 = 6

console.log("100"%"10"-4); // -4
/*
This line of code demonstrates JavaScript's type coercion and operator precedence when working with strings and numbers. Let's break down how JavaScript evaluates this expression:

First, JavaScript encounters the modulo operator % between two strings "100" and "10". When mathematical operations (except addition) are performed on strings that contain valid numbers, JavaScript automatically converts them to numbers. So:

"100" becomes 100
"10" becomes 10
The modulo operation 100 % 10 is then performed, which gives us 0 (since 100 is perfectly divisible by 10)

Finally, the subtraction -4 is performed on the result: 0 - 4

The final output will be -4

This is an example of JavaScript's implicit type coercion where string operands are automatically converted to numbers when used with arithmetic operators other than +. It's generally considered better practice to explicitly convert strings to numbers using methods like Number(), parseInt(), or the unary plus operator (+) to make the code more readable and intentions clearer.
*/
let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter; 
/*
Similarly gameCounter++ exists which increments after certain statement or operation. The above example will increment before any operation. This is not demonstrated by below example. But can be seen in loops etc.
*/

console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion