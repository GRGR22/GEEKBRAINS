let arr = [];
function arrayFill (elem, elemNumber) {
    for (i = 0; i < elemNumber; i++) {    
        arr.push(elem);
    }
    return arr;
}
console.log(arrayFill('T', 52));