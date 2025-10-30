function getLengthOfThreeWords(word1, word2, word3) {
let total= word1.length+ word2.length+word3.length;
return total;  
}

let output = getLengthOfThreeWords('some', 'other', 'words');
console.log(output); // --> 14
