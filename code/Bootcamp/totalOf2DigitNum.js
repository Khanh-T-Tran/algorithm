// You are given a two-digit integer n. Return the sum of its digits.

function getTotal(n) {
    var num = n;
    var n = num.toString().split("");
    var sum = parseInt(n[0]) + parseInt(n[1]);
   
    if (n >= 10 && n <= 99) {
        sum = parseInt(n[0]) + parseInt(n[1]);
        
    } return sum;
    
}

console.log(getTotal(39));