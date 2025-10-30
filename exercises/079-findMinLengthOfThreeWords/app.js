function findMinLengthOfThreeWords (word1,word2, word3){
  let x=  Math.min(word1.length,word2.length,word3.length)
  return x;
}