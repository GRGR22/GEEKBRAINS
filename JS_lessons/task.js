let arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
let summ = 0;
    
    for (i = 0; i < arr.length; i++) {  
        for (j = 0; j < arr[i].length; j++)  {
            for (k = 0; k < arr[i] [j].length; k++)
            summ+=arr[i] [j] [k];
        }     
    }
console.log(summ);