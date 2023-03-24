/* 2. Only unique items are allowed.
You are building a program that takes an array of numbers as input and you need to remove all the duplicates
from the array. You want to write a function that can accomplish this task efficiently and returns a new set that
contains only the unique elements. */

function removeDuplicates(arr) {
    const set = new Set(arr)
    return console.log(Array.from(set))
}

let arr = [1,2,2,3,4,3,5,]

removeDuplicates(arr)


/* The first line of the function creates a new Set object from the input array. Since sets can only contain unique elements, this automatically removes any duplicates from the array.

The second line uses the Array.from() method to convert the set back into an array, which we can then return from the function. */