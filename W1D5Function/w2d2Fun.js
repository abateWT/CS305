/*Q#1. Write a function, double, that takes a number and returns 2 times the number
                        Defining Table
 Input                  Process                Output
 A number          Two times the number     2 times the number = 2*number
 */
function double(number){
    return 2*number;
}
console.log("expect 12",double(6));
console.log("expect -42",double(-21));
console.log("expect -34",double(-17));


 /*Q#2.Write a function times100 that takes a number and returns 100 times the number.
                          Defining Table
 Input                  Process                Output
 A number          100 times the number     100 times the number = 100*number
 */


function times100(num){
    return 100*num;
}
console.log("expect 900",times100(9));
console.log("expect 0",times100(0));
console.log("expect -2700",times100(-27));


/*
Q#3. Write a function, myMap, that takes an array and a function and returns a new array that has
the function applied to each element of the input array. Use your myMap function with your
double and times100 functions.
                             Defining Table
 Input                            Process                        Output
 An array & function          100 times the number       A new array applied to the function
*/


const array = [-10,0,10,20];
function myMap(array,double,times100) {
   for(let value of array){
       console.log(array[value]);
       double();
       console.log(array[value]);
   }
}
function double(array){
     console.log(array[value]);
     console.log(2*array[value]);
     times100()
     console.log(array[value]);

}
function times100(array){
    console.log(100*array[value]);
}
myMap();


/*
Q# 4. Demonstrate your myMap function with an anonymous function that triples the input value.
Write this as an anonymous function expression. Then write it using an arrow expression
*/


arr = [-10,0,10,20];
let myMap = function (arr) {
for(let elements of arr){
    console.log( 3*arr[elements]);
   };
}
myMap();


// Using arrow expressions
arr = [-10,0,10,20];
let myMap = (arr) => {
   for (let elements of arr) {
      return (3 * arr[elements]);
   };
};
console.log(myMap(arr));

module.exports = {double,times100,myMap};
