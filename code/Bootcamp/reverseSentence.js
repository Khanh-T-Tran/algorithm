// Reverse the order of words in a given string sentence. 
// You can assume that sentence does not have any leading, trailing or repeating spaces.

const reverseWords = (sentence) => {
    const words = sentence.split(" ") // => ["I", "love", "you"]
    const revWords = words.reverse() // => ["you", "love", "I"]
    return revWords.join(" ")        // => You love I
}

console.log(reverseWords("I love you"));