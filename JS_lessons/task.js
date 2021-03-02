// let a = [['Goodbye'], {'Great': 'Job'}];
let b = [{state: 'Maine', capital: 'Augusta'}];
console.log (capital(b));
function capital(capitals){
    let valueArr = [];
    for (let value of Object.values(capitals)) {
        valueArr.push(value)
      }
      return ("The capital of " + valueArr[0]  + " is " + valueArr[1]+".");
    }