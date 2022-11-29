// Write code to return the largest number in the given array

var array = [6, 15, 2, 56, 74, 5, 1000, 74];

// Pseudo code:
// We need to compare all the numbers against each other.
// The first number of the array is our starting point.
// We need a variable to store the current max number.
// The first number will also be the starting current max number.
// Loop through the array.
// Compare current number with the current max number.
// If the current number is greater than the current max number.
// The current number becomes the current max number.
// When the loop is done we return the current max number.

function getMax(numberArray) {
    var currentMaxNumber = numberArray[0];
    for (var i = 0; i < numberArray.length; i++) {
        if (numberArray[i] > currentMaxNumber) {
            currentMaxNumber = numberArray[i];
        }
    }
    return currentMaxNumber;
}

// return smallest number of the array

function getMin(numberArray) {
    var currentMinNumber = numberArray[0];
    for (var i = 0; i < numberArray.length; i++) {
        if (numberArray[i] < currentMinNumber) {
            currentMinNumber = numberArray[i];
        }
    }
    return currentMinNumber;
}


console.log(getMax(array));
console.log(getMin(array));