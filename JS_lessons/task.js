let num = prompt('Inter number');
let arrSplit = num.split('');

function getDigitsSum (arr) {
    for (i=0, DigitsSum = 0; i < arr.length; i++) {
        DigitsSum = DigitsSum + Number(arr[i]);
    }
    return DigitsSum;
}
console.log(getDigitsSum(arrSplit));