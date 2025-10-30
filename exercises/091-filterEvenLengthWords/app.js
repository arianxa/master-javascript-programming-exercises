function filterEvenLengthWords(words) {
let extra= words.filter(function(item){
    return item.length%2===0
})    
return extra
}

let output = filterEvenLengthWords(['word', 'words', 'word', 'words']);
console.log(output); // --> ['word', 'word']
