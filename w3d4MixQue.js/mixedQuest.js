//Question #1. Destructuring assignment
"use strict"

let user = {
        name: "John",
        years: 30,
    };
let {name, years:age, isAdmin=false} = user;
console.log(name);
console.log(years);
console.log(isAdmin);
console.log(user);

let obj = {
        "John": 100,
        "Pete": 300,
        "Mary": 250
    };
function topSalary(salaries){
     if(salaries == 0){
            return null;
        } else {
            for(let value in salaries){
                return Math.max(salaries[value]);
           }
        }
    }
console.log(topSalary(obj));

//OR from the text Book
function topSalary(salaries) {
      let maxSalary = 0;
      let maxName = null;
for (const [name, salary] of Object.entries(salaries)) {
    if (maxSalary < salary) {
        maxSalary = salary;
    }
 }
     return maxName;
}
console.log(topSalary(obj));

//Questio # 3. Turn the object into JSON and back
    let user = {
        name: "John Smith",
        age: 35
    };
    let ans = JSON.stringify(user);
    let user2 = JSON.parse(ans);
     //Checking the type
console.log(typeof ans);//string
console.log(typeof user2);//object

/*Question#4.
map :
 - double numbers
 - double age
*/

const numArray = [5,0,7,77,-20,300,51,2];
const peopleArray = [
    { name:"Sam", age:15 },
    { name: "William",age:6},
    { name: "Lucy", age:13 },
    { name:"Barney", age:80}
];

//Double Numbers
let answer = numArray.map(function(element){
    return element*2;
});
console.log(answer);

//Double age
let answer2 = peopleArray.map(function (value) {
        return value.age * 2;
    });
console.log(answer2);

/*
filter:
 - filter all even numbers
 - filter all age > 10
 - find even, include even
 - find age > 10, include age > 10
*/

let answer4 = numArray.filter(element => element %2 ===0);
console.log(answer4);
let answer5 = peopleArray.filter(element => element.age > 10);
console.log(answer5);
let answer6 = numArray.filter(element => element %2 ===0);
console.log(answer6);
let answer7 = peopleArray.filter(element => element.age >= 10);
console.log(answer7);

/*
 reduce:
 - find sum of numbers
 - find average of numbers
 - find max of numbers
 - find max for ages
*/

let response1 = numArray.reduce((sum,current) => sum + current);
console.log(response1);
let response2 = numArray.reduce((sum,current) => sum+current/numArray.length);
console.log(response2);

let [first] = numArray;
const maximiumValue = numArray.reduce((accm, value) => Math.max(accm, value), first);
console.log(maximiumValue);
let [ageMax] = peopleArray;
const maximiumAge = peopleArray.reduce((accm, value) => Math.max(accm, value.age), ageMax);
console.log(maximiumAge);

//use a chain of map filter reduce to find the average age of people with even number ages
//use a chain of map filter reduce to find the average age of people with odd number ages
