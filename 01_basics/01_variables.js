const accountId = 1234;
/* 
const is used to keep values constant. It cannot be changed later
*/
let accountEmail = "abc.example.com";
/*
let is used to declare variables which can be changed later
*/
var accountName = "John";
/*
var is similar to let but var scope is function scoped
It is best not to use var but to use let
let is block scoped 
function test(){ var x = 1; } console.log(x); // Error if outside function
{ let y = 2; } console.log(y); // Error, y only exists inside block
var ignores block boundaries like loops or if-statements.
let only exists within the nearest { } block.
var allows re-declaring the same variable in the same scope.
let does not allow re-declaration in the same scope.
*/ 

let accountStatus; // An undefined variable

accountBalance = "234"; // Without any keyword can also be written

/**
Adding semi colon is optional in most case, but it can throw error in loops or complex code. It is best to use semi colon
 */

accountName = "Doe"; 
/* 
these variables can be changed but not the constant one's
*/

console.log(accountName); // It can only print one value

console.table([accountId,accountName,accountEmail,accountBalance,accountStatus]);
/*
Above command can print multiple values in tabular format
*/
