let endingYear = getRange(prompt('Enter number ending of range'));

function getRange (endOfRange) {
    for (i=1; i <= endOfRange; i++) {
        if (getDigitsSum(i)==14) console.log(i);
    };
};

function getDigitsSum (num) {
    let strOfnum = num.toString().split('');    
    for (j=0, DigitsSum = 0; j < strOfnum.length; j++) {
        DigitsSum = DigitsSum + Number(strOfnum[j]);
    }
    return DigitsSum;
};