// You are given a string s that consists of only lowercase English letters. 
// If vowels ('a', 'e', 'i', 'o', and 'u') are given a value of 1 and consonants are given a value of 2, 
// return the sum of all of the letters in the input string.

// Example:
// For s = "a", the output should be
// solution(s) = 1;
// For s = "abcde", the output should be
// solution(s) = 8.
// The letters in s, converted to 1s and 2s and added together as described above: 1 + 2 + 2 + 2 + 1 = 8.

const sum = (str) => {
    const vowelValue = 1;
    const consonantValue = 2;

    //turn the input into a string
    const string = str.toString();
    //loop through the string
    for (let i = 0; i <= string.length; i++) {
       //if a vowel, add to vowel count
        if (string[i] === "a" || string[i] === "e" || string[i] === "i" || string[i] === "o" || string[i] === "u") {
            
        } else {
            
        }
    }
}




