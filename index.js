//  1 no problem start
const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const calculateSumBtn = document.getElementById("calculateSumBtn");
const sumResult = document.getElementById("sumResult");

// Function to calculate sum
function calculateSum(num1, num2) {
  const sum = num1 + num2;
  sumResult.textContent = sum;
}

// Add event listener to the button
calculateSumBtn.addEventListener("click", function () {
  const num1 = parseFloat(num1Input.value);
  const num2 = parseFloat(num2Input.value);
  calculateSum(num1, num2);
});
//  1 no problem end

// 2 no problem start
const evenNumberInput = document.getElementById("evenNumber");
const checkEvenBtn = document.getElementById("checkEvenBtn");
const isEvenResult = document.getElementById("isEvenResult");

// Function to check if a number is even
function isEven(num) {
  return num % 2 === 0;
}

// Add event listener to the button for question 2
checkEvenBtn.addEventListener("click", function () {
  const num = parseFloat(evenNumberInput.value);
  const result = isEven(num);
  isEvenResult.textContent = result;
});
// 2 no problem end

// 3 no problem start
// Select input fields and button for findMax
const numArrayInput = document.getElementById("numArray");
const findMaxBtn = document.getElementById("findMaxBtn");
const maxResult = document.getElementById("maxResult");

// Function to find the maximum number in an array
function findMax() {
  const numArray = numArrayInput.value.split(",").map(Number);
  const max = Math.max(...numArray);
  maxResult.textContent = max;
}

// Add event listener to the button for findMax
findMaxBtn.addEventListener("click", findMax);

// 3 no problem end

// 4 no problem start
// Select input fields and button for reverseString
const inputString = document.getElementById("inputString");
const reverseStringBtn = document.getElementById("reserveStringBtn");
const reversedStringResult = document.getElementById("reverseResult");

// Function to reverse a string
function reverseString(str) {
  return str.split("").reverse().join("");
}

// Add event listener to the button for reverseString
reverseStringBtn.addEventListener("click", function () {
  const str = inputString.value;
  const reversedStr = reverseString(str);
  reversedStringResult.textContent = reversedStr;
});
// 4 no end

// 5 no prob start

// Select input fields and button for filterOddNumbers
const oddNumArrayInput = document.getElementById("oddNumArray");
const filterOddNumberBtn = document.getElementById("filterOddNumberBtn");
const oddNumbersResult = document.getElementById("oddNumbersResult");

// Function to filter odd numbers from an array
function filterOddNumbers(arr) {
  // Split input value into an array of numbers
  const numArray = arr.split(",").map(Number);

  // Filter odd numbers
  const oddNumbers = numArray.filter((num) => num % 2 !== 0);

  return oddNumbers.join(", "); // Return filtered odd numbers as a string
}

// Add event listener to the button for filterOddNumbers
filterOddNumberBtn.addEventListener("click", function () {
  const numArrayInput = oddNumArrayInput.value;
  const oddNumbers = filterOddNumbers(numArrayInput);
  oddNumbersResult.textContent = oddNumbers;
});

// 5 no prob end

// 6 no prob start
// Select input fields and button for sumArray
const sumArrayInput = document.getElementById("sumArray");
const arraySumBtn = document.getElementById("arraySumBtn");
const sumArrayResult = document.getElementById("sumArrayResult");

// Function to sum an array of numbers
function sumArray(arr) {
  // Split input value into an array of numbers
  const numArray = arr.split(",").map(Number);

  // Calculate sum of numbers in the array
  const sum = numArray.reduce((acc, num) => acc + num, 0);

  return sum; // Return the sum of numbers
}

// Add event listener to the button for sumArray
arraySumBtn.addEventListener("click", function () {
  const numArrayInput = sumArrayInput.value;
  const sum = sumArray(numArrayInput);
  sumArrayResult.textContent = sum;
});
// no 6 end

//no 7 start

// Select input fields and button for sortArray
const sortArrayInput = document.getElementById("sortArray");
const sortArrayBtn = document.getElementById("sortArrayBtn");
const sortArrayResult = document.getElementById("sortArrayResult");

// Function to sort an array of numbers
function sortArray(arr) {
  // Split input value into an array of numbers
  const numArray = arr.split(",").map(Number);

  // Sort the array in ascending order
  const sortedArray = numArray.sort((a, b) => a - b);

  return sortedArray.join(", "); // Return sorted array as a string
}

// Add event listener to the button for sortArray
sortArrayBtn.addEventListener("click", function () {
  const numArrayInput = sortArrayInput.value;
  const sortedArray = sortArray(numArrayInput);
  sortArrayResult.textContent = sortedArray;
});
//no 7 end

// no 8 start
const capitalizeStringInput = document.getElementById("capitalizeString");
const capitalizeStringBtn = document.getElementById("capitalizeStringBtn");
const capitalizeResult = document.getElementById("capitalizeResult");

// Function to capitalize the first letter of a string
function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Add event listener to the button for capitalizeFirstLetter
capitalizeStringBtn.addEventListener("click", function () {
  const str = capitalizeStringInput.value;
  const capitalizedStr = capitalizeFirstLetter(str);
  capitalizeResult.textContent = capitalizedStr;
});
