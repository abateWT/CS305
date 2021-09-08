//Ques#1. Calulator..............................
// const prompt = require('prompt');

// prompt.start();
// function Calculator() {
//          this.sum = function () {
//             return ("Your Sum is:" + (this.opr1 + this.opr2))
//          },
//             this.mul = function () {
//                return ("Your product is: " + (this.opr1 * this.opr2));
//             },
//             this.read = function () {
//                this.opr1 = +Input("Enter the 1st Value", "value1");
//                this.opr2= +Input("Enter the 2nd value!", "value2");
//             }
//       }
//       let cal1 = new Calculator();
//       cal1.read();
//       console.log(cal1.sum());
//       console.log(cal1.mul());
/* */
    let calculator={
    operand1:0,
    operand2:0,
    getValues:function(a,b){
        this.operand1= a;
        this.operand2 = b;
    },
    sum: function(){
        let total= this.operand1+ this.operand2;
        console.log(total);
    },
    mult:function(){
        let product= this.operand2*this.operand1;
        console.log(product);
    }
};
calculator.sum(2,3);
calculator.mult(2,3);
/*Quest#2.
Write a constructor function Accumulator(initialValue, increment).  The object it creates should:
•	Store the current accumulated value in a property currentValue.  The constructor should set this to be initialValue.
•	The accumulate method should increase the currentValue by the increment.
•	The report method should return the currentValue.
*/

function Accumulator(startingValue){
      this.value = startingValue,
    this.read = function(){
      this.numbers = +prompt("Enter a numbers","Numbers",0);
    }
   }
   let accum = new Accumulator(2)//
   accum.read();//
   console.log(accum.value);//
