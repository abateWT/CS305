const assert = require("assert");
const myExports = require("./allcodeQuality.js");
const computeSalesCommission = myExports.computeSalesCommission;
const calcDownpayment = myExports.calcDownpayment;
const calcDistance = myExports.calcDistance;
const convertFahrenheit = myExports.convertFahrenheit;

describe("test of ComputeSalesCommission", function(){
 it("tests salaried and 200 sales", function(){
 assert.strictEqual(computeSalesCommission(true, 200), 0);
 });
 it("tests not salaried and 200 sales", function(){
 assert.strictEqual(computeSalesCommission(false, 200), 0);
 });
 it("tests salaried and 300 sales", function(){
 assert.strictEqual(computeSalesCommission(true, 300), 3);
 });
 it("tests not salaried and 300 sales", function(){
 assert.strictEqual(computeSalesCommission(false, 300), 6);
 });
 it("tests salaried and 3500 sales", function(){
 assert.strictEqual(computeSalesCommission(true, 3500), 65);
 });
 it("tests not salaried and 3500 sales", function(){
 assert.strictEqual(computeSalesCommission(false, 3500), 100);
 });
});

describe("test of calcDownpayment",function(){
 it("The total down payment cost of the house ", function(){
 assert.strictEqual(calcDownpayment(40000),5000);
 });
 it("Down payement of the House & cost 100000", function(){
 assert.strictEqual(calcDownpayment(50000),6500);
 });
 it("Down payement of the House & 150000", function(){
 assert.strictEqual(ccalcDownpayment(100000),8500);
 });
 it("tests not salaried and 300 sales & above 200000", function(){
 assert.strictEqual(calcDownpayment(200000),10500);
 });
})
describe("test of calcDistance", function(){
 it("The distance of two points", function(){
 assert.strictEqual(calcDistance(0,0,5,5),7.7);
 });
 it("The distance of two points", function(){
 assert.strictEqual(calcDistance(1,2,0,5),4);
 });
 it("The distance of two points", function(){
 assert.strictEqual(calcDistance(2,3,5,4),6);
 });
 })

describe("test of convertFahrenheit", function(){
 it("The conversion of fahrenheit", function(){
 assert.strictEqual(convertFahrenheit(32),0);
 });
 it("The conversion of fahrenheit", function(){
 assert.strictEqual(convertFahrenheit(0),-17.778);
 });
 it("The conversion of fahrenheit", function(){
 assert.strictEqual(convertFahrenheit(212),100);
 });
 it("The conversion of fahrenheit", function(){
 assert.strictEqual(convertFahrenheit(100),37.778);
 });
 })
