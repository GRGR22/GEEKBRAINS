let arr = [1, 2, 3, 1, 1, 11, 2, 1];
let count = 0;
let summ = 0;
    
    for (i = 0; i < arr.length; i++) {    
        summ+=arr[i];
        count++
        if (summ >= 10) break;        
    }
console.log(count);