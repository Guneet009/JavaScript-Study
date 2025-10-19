/*
There two types of memory in JS:
 - Stack
 - Heap

Primitive data type values are stored in Stack and Non primitive are stored in Heap.
Please refer the image memory.drawio for better understanding.
When a primitive data type is created and then copied to another variable then the information is copied instead of referencing. So changing the value of one variable won't affect other variable.
Whereas if in an object type variable is copied to another variable then the information is referenced and NOT copied therefore if you change one variable, then other changes automatically since both variables are referencing to same information in heap memory. 
*/

//Primitive data type

let name1 = "Jhon";
let name2 = name1;
name2 = "Doe";

console.log(name1); // Jhon
console.log(name2); // Doe

/* 
As we can see from above example name1 was not changed only name 2 was changed as     new variable was created with the new information
*/

// Non Primitive data type

let detail1 = {
    name:"Jhon",
    age:25
};

let detail2 = detail1;

console.log(detail1); // { name: 'Jhon', age: 25 }
console.log(detail2); // { name: 'Jhon', age: 25 }

detail2.age = 30;

console.log(detail1); // { name: 'Jhon', age: 30 }
console.log(detail2); // { name: 'Jhon', age: 30 }

/* 
As we can see from above example both variables were changed as they were referencing to the same information.
*/