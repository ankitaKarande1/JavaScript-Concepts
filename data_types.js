

// primitive data types (string, number, boolean)


var testing = "Good Afternoon"; //immutable
testing[3] = 'D';
console.log(testing);

// primitive comparing values

var name1 = 'Aditi';
var name2 = 'Aditi';

var fruit1 = 'Apple';
var fruit2 = 'Banana'

console.log(name1 === name2);
console.log(fruit1 === fruit2);

//non-primitive data types (objects, array)

var arr = [ 'one', 'two', 'three', 'four', 'five' ];
console.log(arr);
arr[1] = 'TWO';
console.log(arr);

// non-primitive comparing values

var obj1 = { 'cat': 'playful' };
var obj2 = { 'cat': 'playful' };
console.log(obj1 === obj2);

var arr1 = [ 1, 2, 3, 4, 5 ];
var arr2 = [ 1, 2, 3, 4, 5 ];
console.log(arr1 === arr2); 

//reference same

var obj3 = { 'car' : 'purple' }
var obj4 = obj3;
console.log(obj3 === obj4);