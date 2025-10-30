function reverseString(string) {
  // Invierte el string
  return string.split('').reverse().join('');
}

function isPalindrome(word) {
  // Ignora mayúsculas/minúsculas
  const w = word.toLowerCase();
  return w === reverseString(w);
}

function findLongestPalindrome(sentence) {
  let longest = '';

  // Recorremos todas las subcadenas
  for (let i = 0; i < sentence.length; i++) {
    for (let j = i + 1; j <= sentence.length; j++) {
      const sub = sentence.slice(i, j);
      if (isPalindrome(sub) && sub.length >= longest.length) {
        // >= para quedarnos con la última en caso de empate
        longest = sub;
      }
    }
  }

  return longest;
}

// Prueba
let output = findLongestPalindrome("My dad is a racecar athlete");
console.log(output); // --> "a racecar a"