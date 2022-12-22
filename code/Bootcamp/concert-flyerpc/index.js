// Write a function that takes two strings and determines returns true
// if every word found in the second string is present in the first string, 
// you will be checking for both words and their frequency.
// assume you'll need to worrry about casing, but the strings won't contain any punctuation.
// assume neither string will be empty.
// assume words are unique.

// We need to take each string and split them at the spaces, storing them in a variable as an array.
// We need to declare an object that we will use to store each word and
// the number of times each word is in our string.
// We need to loop through each string.
// We will place each word as a property in the corresponding object.
// As we place each word, we need to give it a value of its current count.
// We then need to loop through the  second string's object comparing each key with the first string's object.
// if the keys donot equal each other, we return false.
// We return true

var concertFlyer = (magazine, flyer) => {
    var magazineWords = magazine.split(" ");
    var flyerWords = flyer.split(" ");

    var magazineMap = {};
    var flyerMap = {};

    for ( var i = 0; i < magazineWords.length; i++) {
        var currentWord = magazineWords[i];

        if(!magazineMap[currentWord]) {
            magazineMap[currentWord] = 1;
        } else {
            magazineMap[currentWord]++;
        }
    }

    for (var i = 0; i < flyerWords.length; i++) {
        var currentWord = flyerWords[i];

        if(!flyerMap[currentWord]) {
            flyerMap[currentWord] = 1;
        } else {
            flyerMap[currentWord]++;
        }
    }

    for (var key in flyerMap) {
        if(magazineMap[key] !== flyerMap[key]) {
            return false;
        }
    }
    return true;
};


// test

var magazine1 = "hello world";
var flyer1 = "hello";
var magazine2 = "Whats so amazing that keeps us stargazing";
var flyer2 = "stargazing whats keeps us so amazing";

console.log(concertFlyer(magazine1, flyer1));
console.log(concertFlyer(magazine2, flyer2));
