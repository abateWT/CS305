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

function myMap(array, double) {
      let result = [];
 for (let i = 0; i < array.length; i++) {
      result.push(double(array[i]));
  }
console.log(result);
}
function double(array) {
   return times100(array * 2)
}
function times100(array) {
   return array * 100;
}
myMap("expect [-20,0,20,40]",[-10,0, 10,20],double);


/*
Q# 4. Demonstrate your myMap function with an anonymous function that triples the input value.
Write this as an anonymous function expression. Then write it using an arrow expression
*/
const arr = [-10,0,10,20];
for (var i = 0; i < array.length; i++) {
    var myMap = function () {
console.log(3 * array[i]);
    }
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
