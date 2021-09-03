/Ques#1. Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.

function maxOfThree(num1,num2,num3){
  if(num1 > num2 && num2 > num3)
        return num1;
    else if(num2 > num1 && num2 > num3)
        return num2;
   else
        return num3;
}
console.log(maxOfThree(12,15,56));//56
console.log(maxOfThree(-45,-89,-78));//=45
console.log(maxOfThree(-6,-8,0));//0

//Ques# 2. Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.


function sum(array1){
   let sums=0;
for(let i=0; i<= array1.length; i++){
       sums = sums + array1[i];
    return (`The sum of the numbers is ${sums}`);
   }
}
console.log(sum([1,2,3,4]));//10
console.log(sum([4,5,6,7]));//22


function multiplies(array2){
   let product = 1;
for(let j=0; j<= array2.length; j++){
       product = product * array2[j];
    return (`The product of the numbers is ${product}`);
   }
}
console.log(multiplies([1,2,3,4]));//24
console.log(multiplies([4,5,1,3]));//60

//Ques# 3.Write a function findLongestWord() that takes an array of words and returns the length of the longest one.


function findLongestWord(arr) {
    for (let value in arr) {
        let ans = Math.max(arr.length)
         if (arr[value] = ans)
    return (`The longest word is ${ans}`);
            }
        }
console.log(findLongestWord(["Nice","Grade","Craftsman","construction"]));//12
console.log(findLongestWord(["Cat","Dog","Elephant"]));//8


/*Ques #4. Arrays have a reverse method that changes the array by inverting the order in which its elements
 appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first,
reverseArray, takes an array as argument and produces a new array that has the same elements in
the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it
modifies the array given as argument by reversing its elements. Neither may use the standard reverse
method.
*/
function reverseArray(array3) {
let myArray = [];
 for (let k = array3.length - 1; k >= 0; k--) {
myArray.push(array3[k]);
   }
      return (`The new array is: ${myArray}.`);
}
console.log(reverseArray(["A","B","c"]));//[4,3,2,1]
console.log(reverseArray([1,2,3,4]));//[4,3,2,1]
console.log(reverseArray([1,2,3,4]));//[4,3,2,1]


function reverseArray(array3) {
   let myArray = [];
for (let k = array3.length - 1; k >= 0; k--) {
   myArray.push(array3[k]);
   }
   return (`The new array is: ${myArray}.`);
}
console.log(reverseArray([1,2,3,4]));//[4,3,2,1]
console.log(reverseArray([7,8,9,10]));//[10,9,8,7]

/*
Ques# 5. Write a function, scoreExams, that takes an array of arrays of student answers and an array of
the correct answers. It should compare each student’s answers against the correct answers and
return an array holding the scores of each student. The score for each student is a count of the
number of correct answers (i.e., matches with the key of correct answers).
*/

 function scoreExams(studentAnswer,correctAnswer) {
      let count = 0;
for (let key=0; key<= studentAnswer.length; key++) {
    for(let element=0; element <= studentAnswer.length[key]; element++){
       for(let key1=0; key1 <= correctAnswer.length; key1++){
          }
      }
   }
if(key[element] == correctAnswer[key1]);
              count++
return ("The student result is: " + count);
}
console.log(scoreExams([[1,1,2,4],[2,1,2,2],[3,1,3,4]],[3,1,2,4]));//[3,2,3] = 3

module.exports = {maxOfThree,sum,multiplies,findLongestWord,reverseArray,scoreExams}
