// Basic methods
// 1.toString()
// Explanation: This method converts a number into a string (text). It is useful when you want to treat a number like text.
// Example:
let price = 450;
let result1 = price.toString();
console.log(result1);
// Question:
// If you have let id = 101; , how will you convert it to a string? Write the code line.

//2.toExponential()
// Explanation: This method returns a string representing the number in scientific notation (like 5e+2). It is used to write very large or very small numbers compactly.
// Example:
let Number = 9.656;
let result2 = Number.toExponential(2); 
console.log(result2); 
// Question:
// If you use num.toExponential(4), how many digits will appear after the decimal point?

// 3. toFixed()
// Explanation: This method formats a number with a specific number of digits after the decimal point. It also rounds the number.
// Example:
let prize = 99.6789;
let result = prize.toFixed(2); 
console.log(result);
// Question:
// If you have let total = 10.89;, what will be the output of total.toFixed(0)?

// 4.toPrecision()
// Explanation: This method formats a number to a specific total length. Unlike toFixed, it counts all digits (before and after the decimal).
// Example:
let myVal = 12.345;
let result4 = myVal.toPrecision(2); 
console.log(result4); 
// Question: 
// If you have let rate = 5.678;, what will be the output of rate.toPrecision(2)?

// 5.valueOf()
// Explanation: This method returns the primitive value of a number. In JavaScript, a number can be an object, but valueOf() gives us the actual number back
// Example:
let x = 123;
let result5 = x.valueOf();
console.log(result5); 
// Question:
// Does valueOf() change the value of a number or does it keep it the same?
 
// Static Methods
// 6.Number.isInteger()
// Explanation: This method checks whether the passed value is a finite number (not infinity and not NaN). It returns true or false.
// Example:
// window.Number likhne se browser ko pata chal jata hai ke asli built-in Number use karna hai
let check = this.Number.isInteger(10); 
console.log(check);
// Question:
// What will be the output if we check a decimal number like this: Number.isInteger(4.5)?

// 7.Number.isNaN()
// Explanation: This method checks if a value is NaN (Not-a-Number). It returns true if the value is NaN, otherwise false.
let result7 = isNaN(123); 
console.log(result7); 
// Question:
// If you try to do math that doesn't make sense, like 0 / 0, it results in NaN. So, what will isNaN(0 / 0) return? (true ya false?)

// 8. parseInt()
// Explanation: This method parses a string and returns a whole number (integer). It ignores everything after the decimal point and any non-numeric characters that follow the number.
// Example:
let age = "25 years";
let result8 = parseInt(age); 
console.log(result8); 
// Question: 
// If you use parseInt("50.85"), what will be the output?

// 9. Number.parseFloat()
// Explanation: This method parses a string and returns a floating-point number (a number with decimals). It is useful when you need to keep the precision of the number from a string.
// Example:
let RS = "99.99 dollars";
let result9 = parseFloat(RS); 
console.log(result9); 

// 10. isFinite()
// Explanation: This method checks whether a value is a finite number. It returns false if the value is Infinity, -Infinity, or NaN (Not-a-Number), and true for all other valid numbers.
// Variable ka naam 'status' ya 'isValid' rakh lein
let isValid = isFinite(500); 
console.log(isValid); 
// Question:
// Question: If we check a division by zero like isFinite(50 / 0), what will be the output?

// Example 1: Price Formatting (Using parseFloat + toFixed)
let bill = "1250.897 RS";
let numBill = parseFloat(bill); 
let finalBill = numBill.toFixed(2); 
console.log("Example 1 Result: " + finalBill);

// Example 2: Verification (Using parseInt + isInteger)
let score = "85 points";
let numScore = parseInt(score); 
let isOk = this.Number.isInteger(numScore); 
console.log("Example 2 Result: " + isOk);

// One Small Problem 
// Problem: You have a string 'let speed = "120.789 km/h";'. 
// Task: Extract the number from this string and show only 2 digits after the decimal point.
// ( Use parseFloat and toFixed together)

