// Every Exercise
// Instructions: Create an array of at least five numbers. Write code to check if every number in the array is positive.

const numbers = [2,3,4,5,8]
  
const value = (num) => {
    return num > 0
}

console.log(numbers.every(value))