// Challenge - 1
// Use a for loop to calculate the sum of the numbers in the given array.
let arrayNumbers = [3, 4, 6, 8, 90, 65, 75, 75, 54, 10]
// SOLUTION
let sum = 0;
for (let i = 0; i < arrayNumbers.length; i++) {
    sum = sum + arrayNumbers[i];
}
console.log(`The sum of the numbers in the array data structure 'ArrayNumbers' = ${sum}`);


// Challenge - 2
// Use a for loop to determine the numbers of all even numbers in the given array. You can determine if a number is even or odd by using the remainder operator(%)
// You will need a variable that is zero that increments by one for every even number detected.
let arrayNumbers = [3, 4, 6, 8, 90, 65, 75, 75, 54, 10]
// SOLUTION
let evenNr = 0;

for (let i = 0; i < arrayNumbers.length; i++) {
    arrayNr = arrayNumbers[i];

    if (arrayNr % 2 == 0) {
        console.log(`${arrayNr} is an even number`);
        evenNr = evenNr + 1
    } else {
        console.log(`${arrayNr} is an odd number`)
    }
}
console.log(`The total number of even numbers we have in the array is: ${evenNr}`);

// Challenge - 3
// Use a for loop that logs 'This is Kadahive 10 times'



// Challenge - 4
// Write a program that calculates the area of a rectangle that has a height of 10cm and a breadth of 15cm



// Challenge - 5
// Write a JavaScript program to check a pair of numbers that logs true if one of the numbers is 50 or if their sum is 50

let firstNumber = 20
let secondNumber = 50
