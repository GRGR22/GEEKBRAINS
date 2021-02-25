var num = parseInt(prompt('Inter the number'));

function isNumberInRange(num) {
	if (num > 0 && num < 10) {
		return true;
	} else {
		return false;
	}
}
console.log(isNumberInRange(num));