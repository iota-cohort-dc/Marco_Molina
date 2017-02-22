// 4 Numbers
var one = 1;
var negativeOne = -1;
var decimal = 1.1;
var num = 11;
// 3 Strings
var first_name = "Marco"
var last_name = "Molina"
var randomString = "Dojo"
// 2 Booleans
var errors = false;
var something = true;
// 1 Undefined Variable
var nope;

var arr = [];
arr.push(one,negativeOne, decimal, num, first_name, last_name, randomString, errors, something, nope);

for (let i = 0; i < arr.length; i++){
    if (typeof(arr[i]) == 'number'){
        console.log("Number: " + arr[i]);
    }
    else if (typeof(arr[i]) == 'string'){
        console.log("String: " + arr[i]);
    }
    else if (typeof(arr[i]) == 'boolean'){
        console.log("Boolean: " + arr[i]);
    }
    else{
        console.log("This variable is undefined:", nope)
    }

}
