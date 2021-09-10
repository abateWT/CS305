const prompt = require('prompt');
prompt.start();


/*Question #1.  Sum numbers from the visitor.
Create a script that prompts the visitor to enter two numbers and then shows their sum.
*/

let userNum1 = +Input("Enter the first number!");
let userNum2 = +Input("Enter the first number!");
console.log(`The sum of the two numbers is: ${userNum1 + userNum2}`);


/*Question #1.Repeat until the input is a number
Create a function readNumber which prompts for a number until the visitor enters a valid
numeric value. The resulting value must be returned as a number. The visitor can also stop the process by entering an empty line or pressing “CANCEL”. In that
case, the function should return null .
*/

function readNumber(){
//let userInput = prompt ("Enter anything !");
if(typeof userInput === "number"){
    console.log(userInput);
}else {
    console.log(null);
    }
}
readNumber();

//Questionn# 3. Because of the presion results it is infinite loop or no limit to stop.
/*
A random number from min to max
The built-in function Math.random() creates a random value from 0 to 1 (not including 1 ).
Write the function random(min, max) to generate a random floating-point number from min
to max (not including max ).
*/


function random(min, max){
return min - (Math.random()*(max-min));
}
console.log(random(1,5));

/*Question#4
Create a function randomInteger(min, max) that generates a random integer number from
min to max including both min and max as possible values.
*/

function randomInteger(min, max){
return Math.floor(min - (Math.random()*(max-min)));
}
console.log(randomInteger(1,5));

/*Question#5.Write a function ucFirst(str) that returns the string str with the uppercased first character,
for instance:
 */

 function ucFirst(str) {
 let ans1 = str.substring(0,1).toUpperCase();
 let ans2 = str.substring(1,str.length);
      return (ans1 + ans2);
}
console.log(ucFirst("moub"));//Moub
console.log(ucFirst("john"));//John

/*Question#6. Check for spam
 Write a function checkSpam(str) that returns true if str contains ‘viagra’ or ‘XXX’,
   otherwise false.
*/

function checkSpam(str) {
      return (str.includes("viagra") || str.includes("XXX"))? true:false;
}
console.log(checkSpam("viagra XXXNice"));//true
console.log(checkSpam("insensitiveXXx"));//false
console.log(checkSpam("calmXXX"));//true

/*Qusetion#6.
Create a function truncate(str, maxlength) that checks the length of the str and, if it
exceeds maxlength – replaces the end of str with the ellipsis character "…" , to make its
length equal to maxlength .
*/

var truncate = function (word, number) {
      if (word.length > number)
      var a1 = word.substring(0,number);
      var a2 = word.substring(number, word.length);
      var a3 = word.replace(a2, "...");
          return (a3);
}
console.log(truncate("What I'd like to tell on this topic is:",20));//"What I'd like to te…"
console.log("Hi Everbody!",15)//Hi Everbody!
console.log(truncate("Hello students, Good Morning", 20));

/*Question#7
Extract the money
Create a function extractCurrencyValue(str) that would extract the numeric value from
such string and return it.
*/
function extractCurrencyValue(str){
    return str.substring(1,str.length);
}
console.log(extractCurrencyValue("$1200"));//1200
console.log(extractCurrencyValue("$45678"));//45678
console.log(extractCurrencyValue("$125"));//125


//Question#7. Array operations
var array = ["Jazz","Blues"];
array.push("Rock-n-Roll");
if(array.length %2 != 0)
array[Math.floor(array.length / 2)] = "Calssics";
console.log(array[0]);
array.unshift("Rap","Reggae");
console.log(array);
//Question#8. What is the result? Why?
 let arr = ["a", "b"];
  arr.push(function () {
    console.log(this);
  })
  arr[2](); // ?
//The answer is ["a","b", the function itself] b/c the array already has two vlues i.e "a" and "b" b/c of push lastly it adds the end the function. In the case arr[0] and arr[1] arenot applicable. Hence it is not a function. arr[2] is calls the function b/c of "this", then the answer as indicated above.


/*Question#9.
Please note the subtle, but important detail of the solution. We don’t convert value to
number instantly after prompt , because after value = +value we would not be able
to tell an empty string (stop sign) from the zero (valid number). We do it later instead.
*/

var sumInput = function () {
  var users = prompt("Enter different numbers!");
  users = [];
  if(users === "" || users %10 != 0)
   return
  else
    var sum = 0;
    for(var num =0; num<=users.length;num++){
     sum = sum + num;
      return (sum);
    }
  }
  console.log(sumInput());

//Question#10. Write the function camelize(str) that changes dash - separated words like “my - short - string” into camel - cased “myShortString”. That is: removes all dashes, each word after dash becomes uppercased

function camelize(str) {
    return str.split('-') // splits 'my-long-word' into array ['my', 'long', 'word']
      .map(
        // capitalizes first letters of all array items except the first one
        // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
 (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
      )
      .join(''); // joins ['my', 'Long', 'Word'] into 'myLongWord'
  }
/*Qusetion#11. Copy and sort array
We can use slice() to make a copy and run the sort on it: */

function copySorted(arr) {
    return arr.slice().sort();
}
let arr = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr);
console.log(sorted);
console.log(arr);
/*Question#12.
Write the function sortByAge(users) that gets an array of objects with the age property and
sorts them by age .
 */

function sortByAge(arr) {
arr.sort((x,y) => x.age - y.age);
}
let john = { name: "John", age:25};
let pete = { name: "Pete", age:30};
let mary = { name: "Mary", age:28};
let arr = [ pete, john, mary ];
console.log(arr[0].name);
console.log(arr[1].name);
console.log(arr[2].name);


/**Question#13.
Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.
Multiple runs of shuffle may lead to different orders of elements.
 */


function shuffle(array) {
array.sort(() => Math.random() - 0.5);
}
let arr = [1, 2, 3];
shuffle(arr);
console.log(arr);


/**Question#14.
Write the function getAverageAge(users) that gets an array of objects with property age
and returns the average age.The formula for the average is (age1 + age2 + ... + ageN) / N .
 */

function getAverageAge(users) {
return users.reduce((prev, user) => prev + user.age, 0)/users.length;
}
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };
let arr = [ john, pete, mary ];
console.log( getAverageAge(arr));
