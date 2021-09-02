
function computeSalesCommission(boolean,SalesAmount) {
    let salesCommission;
        if (SalesAmount < 300 && boolean == "true"){
        return ("Salaried and " + (salesCommission = 0));
    }else{
         }if (SalesAmount > 300 && SalesAmount < 500){
            return ("Salaried and " +  (salesCommission = 0.01 * SalesAmount));
          }if (SalesAmount > 500){
            return ( "Not Salaried and " + (salesCommission = 0.02 * SalesAmount));
         }if (SalesAmount > 300 && SalesAmount < 500){
            return salesCommission = 0.02 * SalesAmount;
             }else (SalesAmount > 500){
            return salesCommission = 0.03 * SalesAmount
    }
}
console.log("expect 0: ", computeSalesCommission(true, 200));
console.log("expect 0: ", computeSalesCommission(false, 200));
console.log("expect 3: ", computeSalesCommission(true, 300));
console.log("expect 6: ", computeSalesCommission(false, 300));
console.log("expect 65: ", computeSalesCommission(true, 3500));
console.log("expect 100: ", computeSalesCommission(false, 3500));



function calcDownpayment(cost){
     if(cost > 0 && cost < 50000){
        return (0.05*cost);
     }if(cost >= 50000 && cost < 100000){
        return (2500 + 0.10 *(cost - 50000));
     }if(cost >= 100000 && cost < 20000){
        return (7500 + 0.15 *(cost - 10000));
     }if(cost >= 200000){
        return (5000 + (0.10*(cost - 200000)));
     }
  }
console.log("expect 2000:",calcDownpayment(40000));
console.log("expect 2500:",calcDownpayment(50000));
console.log("expect 7500:",calcDownpayment(100000));
console.log("expect 22500:",calcDownpayment(200000));



function calcDistance(x1,y1,x2,y2){
    let distance = Math.sqrt((x2-x1)**2 + (y2 - y1)**2);
       return distance;
}
console.log("expect 5 : ",calcDistance(0,0,5,5));
console.log("expect 4 : ",calcDistance(1,2,0,5));
console.log("expect 6 : ",calcDistance(2,3,5,4));



function  convertFahrenheit(tempInFahr){
    let Celicius = ((tempInFahr - 32) * 5/9);
    let answer = Celicius.toFixed(3);
    return answer;
}
console.log("expect 0: ",convertFahrenheit (32));
console.log("expect -17.7778: ",convertFahrenheit (0));
console.log("expect 100: ",convertFahrenheit (212));
console.log("expect 37.7778: ",convertFahrenheit (100));
module.exports = {computeSalesCommission,calcDownpayment,calcDistance,convertFahrenheit}