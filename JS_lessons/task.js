// let a = [['Goodbye'], {'Great': 'Job'}];
let b = [1234, 1, 2, 3, 1234, 1234, 4, 5, 5, 5, 2, 1, 3, 66, 6, 66, 66, 7];
let newArr = [];
distinct(b);
function distinct(a){
    let z = [...new Set(a)]
    console.log(z);
    }