

// Array literal
let myArray = [1, 2, 3, 4, 5];

// Creating array using contructor

let myArrayConstructor = new Array();
console.log(`Empty array${myArrayConstructor}`);
myArrayConstructor.push(24);
console.log(`Not empty array${myArrayConstructor}`);

// Creating array with values using constructor
let myConstructorArray = new Array(10, 20, 30, 40, 50);
console.log(`# value array ${myConstructorArray}`);
console.log(`# value array obj`, myConstructorArray);

// Create array with constructor
let array2 = new Array (10);
console.log(`New array: ${array2}`);
// Add (push) 80 to array
array2.push(80);
console.log(`New array: ${array2}`);

// Tuesday
let tuesdayArray = new Array(10).fill("Tuesday!");
console.log(`Class is on ${tuesdayArray}`);

/**
 * 
 * @param {*} x 
 * @returns 
 */
function square(x) {
    return x * x;
}

let nums = new Array(1, 33, 22, 5);
let squaredNums = nums.map(function(value) {
    return square(value);
})
console.log(`Squared Values: ${squaredNums}`);

// TODO: rewrite
// let squaredNums = nums.map(function(value) {
//     return square(value);
// });
// using arrow functions
