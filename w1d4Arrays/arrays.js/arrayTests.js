"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser
*/
module.exports = {maxOfThree,sum,multiplies,findLongestWord,reverseArray,scoreExams}; //add all of your function names here that you need for the node mocha tests

/**
 *
 * @param {number} a is a number
 * @param {number} b is a number
 * @param {number} c is a number
 * @returns {number} largest of a, b, c
 */

const assert = require("assert");
const myExports = require("./arrays.js");
const maxOfThree = myExports.maxOfThree;
const sum = myExports.sum;
const multiplies = myExports.multiplies;
const findLongestWord = myExports.findLongestWord;
const reverseArray = myExports.reverseArray;
const  scoreExams = myExports.scoreExams;


describe("maxOfThree", function() {
   it("the max of 12 15 56", function() {
   assert.equal(maxOfThree((12,15,56),56));
   });
   it("the max of -45 -89 -78", function() {
   assert.equal(maxOfThree((-45,-89,-78),-45));
   });
   it("the max of -6 -8 0", function() {
   assert.equal(maxOfThree((-6,-8,0),0));
   });
  });


describe("sum", function() {
   it("the sum of 1 2 3 4", function() {
   assert.equal(sum([1,2,3,4],10));
   });
   it("the sum of 4 5 6 7", function() {
   assert.equal(sum([4,5,6,7],22));
   });
 });


describe("multiplies", function() {
   it("the product of 1 2 3 4", function() {
   assert.equal(multiplies([1,2,3,4],36));
   });
   it("the product of 4 5 1 3", function() {
   assert.equal(multiplies([4,5,1,3],60));
   });
 });


describe("findLongestWord", function() {
   it("the longest word of Nice Grade Craftsman construction", function() {
   assert.equal(findLongestWord(["Nice", "Grade", "Craftsman", "construction"],"construction"));
   });
   it("the longest word of Cat Dog Elephant", function() {
   assert.equal(findLongestWord(["Cat", "Dog", "Elephant"],"Elephant"));
   });
 });


describe("reverseArray", function () {
    it("tests reverseArray odd number elements", function () {
        assert.deepEqual(reverseArray(["A", "B", "C"]), ["C", "B", "A"]);
    });
    it("tests reverseArray even number elements", function () {
        assert.deepEqual(reverseArray(["A", "B", "C", "D"]), ["D", "C", "B", "A"]);
    });
    it("tests reverseArrayInPlace odd number elements", function () {
        assert.deepEqual(reverseArrayInPlace([1, 2, 3, 4, 5]), [5, 4, 3, 2, 1]);
    });
});

describe("scoreExams", function () {
    it("exam with one student", function () {
        assert.deepEqual(scoreExams([[1,1,2,4], [2,1,2,2], [3,1,3,4]], [3,1,2,4]));
    });
  });
