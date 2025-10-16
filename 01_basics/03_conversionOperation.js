// String to Number

let accountName = "33";
let numberAccountName = Number(accountName);
console.log(numberAccountName);   //33
console.log(typeof(numberAccountName));  // number

let randomName = "33abc";
let numberRandomName = Number(randomName);
console.log(numberRandomName); //Nan
console.log(typeof(numberRandomName)); //number

let alpha = "Hello";
let numberAlpha = Number(alpha);
console.log(numberAlpha); //Nan
console.log(typeof(numberAlpha)); //number

// Boolean to Number

let val1 = true;
let numberVal1 = Number(val1);
console.log(numberVal1); // 1
console.log(typeof(numberVal1)); // number

let val2 = false;
let numberVal2 = Number(val2);
console.log(numberVal2); // 0
console.log(typeof(numberVal2)); // number

// Number to String

let beta = 33;
let alphaBeta = String(beta);
console.log(beta); // 33
console.log(typeof(alphaBeta)); //String

// Boolean to String

let gamma = true;
let pie = false;
let alphaGamma = String(gamma);
let alphaPie = String(pie);
console.log(alphaGamma); // true
console.log(typeof(alphaGamma)); // string
console.log(alphaPie); // false
console.log(typeof(alphaPie)); // string

// Number to Boolean

let num1 = 23;
let num2 = 0;
let num3 = 3.1;
let num4 = 1;
let num5 = -23;

let booleanNum1 = Boolean(num1);
let booleanNum2 = Boolean(num2);
let booleanNum3 = Boolean(num3);
let booleanNum4 = Boolean(num4);
let booleanNum5 = Boolean(num5);

console.log(booleanNum1); // true
console.log(typeof(booleanNum1)); // boolean
console.log(booleanNum2); // false
console.log(typeof(booleanNum2)); // boolean
console.log(booleanNum3); // true
console.log(typeof(booleanNum3)); // boolean
console.log(booleanNum4); // true
console.log(typeof(booleanNum4)); // boolean
console.log(booleanNum5); // true
console.log(typeof(booleanNum5)); // boolean

// String to Boolean

let word = "Hello";
let noWord = "";
let booleanWord = Boolean(word);
let booleanNoWord = Boolean(noWord);

console.log(booleanWord); // true
console.log(typeof(booleanWord)); // boolean
console.log(booleanNoWord);// false
console.log(typeof(booleanNoWord)); // boolean


// Undefined to String, Number and Boolean and vica versa

let something = undefined;
let stringSomething = String(something);

console.log(stringSomething); // undefined 
console.log(typeof(stringSomething)); //string

let chi = "Hello"
let check = undefined(chi);

// ----------------------------------------------------------------
console.log(check); // error -> Undefined is not a function
console.log(typeof(check)); // error
// ----------------------------------------------------------------

let someNumber = undefined;
let numberSomeNumber = Number(someNumber);

console.log(numberSomeNumber); //Nan
console.log(typeof(numberSomeNumber)); // number

let someBool = undefined;
let booleanSomeBool = Boolean(someBool);

console.log(booleanSomeBool); // false
console.log(typeof(booleanSomeBool));  // boolean

// null to String, Number and Boolean and vica versa

let phi = null;
let stringPhi = String(phi);

console.log(stringPhi); // null
console.log(typeof(stringPhi)); // String

let randomVar = "Hello";
let nullRandomVar = null(randomVar);

// ----------------------------------------------------------------
console.log(nullRandomVar); // error -> null is not a function
console.log(typeof(nullRandomVar)); // error
// ----------------------------------------------------------------

let randomNumber = null;
let numberRandomNumber = Number(randomNumber);

console.log(numberRandomNumber); // 0
console.log(typeof(numberRandomNumber)); // number

let randomBool = null;
let booleanRandomBool = Boolean(randomBool);

console.log(booleanRandomBool); // false
console.log(typeof(booleanRandomBool)); // boolean

// Non declared variable to String, Number and Boolean

let noString;
let noNumber;
let noBoolean;

let yesString = String(noString);
let yesNumber = Number(noNumber);
let yesBoolean = Boolean(noBoolean);

console.log(yesString); // undefined 
console.log(typeof(yesString)); // string

console.log(yesNumber); // Nan
console.log(typeof(yesNumber)); // number

console.log(yesBoolean); // false
console.log(typeof(yesBoolean)); // boolean