// Find Exercise
// Instructions: Create an array of at least five numbers. Write code to find the first element that is greater than 10.

const arrayNumber = [1,10,20,2,3,4,5];

const greater = arrayNumber.find((element) => {
    return element > 10; 
})

console.log(greater)