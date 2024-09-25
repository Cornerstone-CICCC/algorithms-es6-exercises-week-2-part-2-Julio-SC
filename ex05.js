// Some Exercise
// Instructions: Create an array of at least five numbers. Write code to check if some of the numbers are even.

const array = [3,5,7,9,13];

const even = (element) => {
    return element % 2 === 0;
}

console.log(array.some(even));