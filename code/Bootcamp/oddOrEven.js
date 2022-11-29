//  Write code to return the string "odd" if 'num' is an odd number
//  and return the string "even" if 'num' is and even number

// Pseudo code:
// What is an even number?
// An even number is a number when divided by two
// has a remainder of zero 
// %
// We will be using integers
// We need to check if the remainder of the number is equal to zero
// If it does equal to zero, then it is even
// If it does not equal zero, then it is odd

function oddOrEven(number) {
    if(number % 2 === 0) {
        return 'even';
    } else {
        return 'odd';
    }
}
console.log(oddOrEven(3));
console.log(oddOrEven(10));