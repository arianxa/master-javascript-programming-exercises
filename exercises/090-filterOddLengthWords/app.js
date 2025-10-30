function filterOddLengthWords(words) {
let extra=words.filter(function (item){
    return item.length %2!==0
})
return extra
}

let output = filterOddLengthWords(['there', 'it', 'is', 'now']);
console.log(output); // --> ['there', 'now']
