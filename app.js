const numbers = [23,44,22,88,123,777,54,98];

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