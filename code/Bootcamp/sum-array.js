// Write code to add all the numbers in "arr" and return the total
// [5, 7, 9, 3, 4]
// We need a variable to store our sum
// We need to loop through the array
// As we loop through number in the array
// We need to add that number to our sum variable
// We need to return the sum

// function sumArray take array as the parameter
function sumArray(array) {
    // declare sum variable = 0 as a starting point so the total value will not be changed
    var sum = 0;

    for (var i = 0; i < array.length; i++) {
        sum += array[i]; // sort for sum = sum + array[i]
    }
    return sum;
}

var numbersArray = [5, 7, 9, 3, 4];

console.log(sumArray(numbersArray));