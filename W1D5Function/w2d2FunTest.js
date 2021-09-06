"use strict";
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser
*/
module.exports = {double,times100,myMap}; //add all of your function names here that you need for the node mocha tests

/**
 *
 * @param {array} double the element
 * @param {array} double the element
 * @param {array} double the element
  */

/* You need the assert and function name declarations to test in node.
Comment these out when you send it to the browser with the index.html mocha setup page.
*/
const assert = require("assert");  //always need this with node
const imports = require("./w2d2Fun.js");  //with node need the name of your file with your functions here
const double = imports.double;  //do this for all of the functions used in the Mocha tests
const times100 = imports.times100;
const myMap = imports.myMap;


/* the following comment is needed when you run in the browser environment */
/* global assert double times100 myMap  */


/* 1. Write a function, double, that takes a number and returns 2 times the number..  */
describe("double", function () {
    it("tests double 6", function () {
        assert.strictEqual(double(6),12);
    });
    it("tests double -21", function () {
        assert.strictEqual(double(-21),-42);
    });
    it("tests double -17", function () {
        assert.strictEqual(double(-17),-34);
    });
});


/*  2.	Write a function times100 that takes a number and returns 100 times the number. */
describe("times100", function () {
    it("tests times100 9", function () {
        assert.strictEqual(times100(9),900);
    });
    it("tests times100 0", function () {
        assert.strictEqual(times100(0),0);
    });
    it("tests times100 -27", function () {
        assert.strictEqual(times100(-27),-2700);
    });
});

 /* 3. Write a function, myMap, that takes an array and a function and returns a new array that has the function applied to each element of the input array. */
    describe("myMap", function () {
        const arr = [-10,0,10,20];
        it("tests myMap on double", function () {
            assert.deepStrictEqual(myMap(arr, double), [-20,0,0,40]);
        });
        it("tests myMap on times100", function () {
            assert.deepStrictEqual(myMap(arr, times100), [-1000,0,1000,2000]);
        });
    });

    /* 4. Demonstrate your myMap function with an anonymous function that triples the input value.  Write this as an anonymous function expression.
    Then write it using an arrow expression. */

    describe("myMap", function () {
        const arr = [-10,0,10,20];
        it("tests myMap on triples anonymous function", function () {
            assert.deepStrictEqual(myMap(arr,myMap), [-30,0,30,60]);
        });
        it("tests myMap on triples arrow function", function () {
            assert.deepStrictEqual(myMap(arr,myMap), [-30.0,30,60]);
        });
    });

