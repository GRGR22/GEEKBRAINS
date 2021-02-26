let arr = [];
let num = getDivisors(Number(prompt('Enter number to detect Divisors')));

function getDivisors (toDivise) {
    for (i=1; i <=toDivise; i++) {
        if (toDivise % i === 0) arr.push(i)
    }
};
console.log(arr)
