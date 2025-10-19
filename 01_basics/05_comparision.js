// Comparing same datatype

console.log(2<=1);  // false
console.log(2>=1);  // true
console.log(2**2==4); // true
console.log(4!=1); //true

// Comparing different datatypes
// In such case result might be unpredictable. Best practice is to never compare differnt
// datatypes

console.log("2">1); // true
console.log("02"<1); // false

console.log(null >= 0);  // true
console.log(null <= 0);  // true
console.log(null == 0);  // false

console.log(undefined >= 0); // false
console.log(undefined <= 0); // false
console.log(undefined == 0); // false

/* 
=== comparision operator is to do strict check.
It compares datatypes along with value instead of changing dataypes which happens in
==
*/

console.log("02"==2); //true
console.log("02" === 2); //false