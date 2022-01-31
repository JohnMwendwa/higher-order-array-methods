const numbers = [-1,-5,-32,0,23,44,22,88,123,777,54,98];

// Sort Array from lowest to largest
const sortAscendingArray = arr=> arr.sort(function(a,b){
    return a-b;
});

console.log(sortAscendingArray(numbers))

// Sort array from largest to lowest
const sortDescendingArray = arr => arr.sort(function(a,b){
    return b - a;
})
console.log(sortDescendingArray(numbers))

//Get array total
const arrTotal = arr=> arr.reduce((num,currNum)=> num + currNum,0)

console.log(arrTotal(numbers))

//Filter out unwanted values in an array (Negative numbers)
const arrFilter = arr => arr.filter(num=>num >= 0);
console.log(arrFilter(numbers))

// LOOP AN ARRAY 
//Using forEach method
const arrLoop = arr => arr.forEach(function(num){
   return console.log(num)
});
console.log(arrLoop(numbers))

//using for...of method
const arrLoop2 = arr =>{
    for(let num of arr){
       console.log(num)
    }
}

console.log(arrLoop2(numbers))

// Make a copy of an array without altering the original array
const makeCopy = arr => arr.map(num => num + 1)
console.log(makeCopy(numbers))

