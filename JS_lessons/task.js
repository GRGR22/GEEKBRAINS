let arr = [1, 2, 3, -1, -2, 9];
let result = [];

function isNumberInRange(num) {
	if (num > 0 && num < 10) {
		return true;
	} else {
		return false;
	}
}

for (i=0; i <arr.length; i++) {
        if (isNumberInRange(arr[i])) {
            result.push(arr[i])
        }
    }

console.log((result));