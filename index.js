// Adds two numbers
const add = (a, b) => a + b;

// Adds 2 to the input number
const addTwo = x => x + 2;

// Logs the numbers and adds them
const logAndAdd = (a, b) => {
  console.log(`Adding ${a} and ${b}`);
  return a + b;
};

// Creates a new array with squared values
const nums = [1, 2, 3];
const squares = nums.map(x => x * x);
console.log(squares); // [1, 4, 9]

// Function expression that divides 2000 by 100
const divide = function() {
  return 2000 / 100;
};

// Arrow function that squares a number
const square = x => x * x;


  