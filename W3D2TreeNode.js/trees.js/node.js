
/*
Sum all numbers till the given one
Write a function sumTo(n) that calculates the sum of numbers 1 + 2 + ... + n .
*/
function sumTo(number){
  if(number==1) return 1;
  return number + sumTo(number-1);
}
console.log(sumTo(1));//1
console.log(sumTo(4));//10
console.log(sumTo(100));//5050
//Using the loop for ....loop
function sumToLoop(n) {
    let sum = 0;
for (let i = 1; i <= n; i++) {
        sum = sum + i;
  }
    return sum;
}
console.log(sumToLoop(1));//1
console.log(sumToLoop(4));//10
console.log(sumToLoop(100));//5050
//Calculate factorial
function factorial(k){
    if(k==1 || k==0) return 1;
    return k*factorial(k-1);
}
console.log(factorial(4));
console.log(factorial(5));
/*
Fibonacci numbers
The sequence of Fibonacci numbers  has the formula Fn = Fn-1 + Fn-2 . In other words,
the next number is a sum of the two preceding ones.
 */
function fib(num){
   if(num==0 || num==1) return 1
   return fib(num-1) + fib(num-2)
}
console.log(fib(5));
console.log(fib(4));
// Output a single-linked list
// Let’s say we have a single-linked list (as described in the chapter Recursion and stack):
function printList(list) {
     if (list.next) {
        printList(list.next);
    }
}
//Output a single-linked list in reverse order
function printReverseList(list) {
     if (list.next) {
         printReverseList(list.next);
    }
  }
  /*
 Write a recursive function that will print “name: value” to the console for every node in the
following tree data structure. Then write an iterative function that also does this. The following is
the output you should have for the recursive version. The iterative version should be similar, but it
is not necessary for every line to be in the same order.
  */
let node3 = {
 name: "p",
 value: "This is text in the a paragraph",
 children: null
};
let node4 = {
 name: "label",
 value: "Name",
 children: null
};
let node5 = {
 name: "input",
 value: "this was typed by a user",
 children: null
};
let node2 = {
 name: "div",
 value: null,
 children: [node4, node5]
};
let node1 = {
 name: "body",
 children: [node2, node3],
 value: null,
}

function printNames(node1){
    consol.log(node1.name+":"+node1.value);
    if(node1.children && node1.children.length>0){
        node1.children.forEach(function(child){
            printNames(child);
        })
    }
}
printNames(node1);
