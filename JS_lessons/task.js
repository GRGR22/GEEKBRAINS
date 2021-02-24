let arr = [];

for (i = 1; i < 4; i++) {
    let elem = '';
	for (j = 0; j < i; j++) {
        elem+=i
    };
    arr.push(elem);
}
console.log(arr);