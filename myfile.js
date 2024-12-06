// //date:11-09
// console.log(Infinity*Infinity)
// console.log(0*Infinity)

// function isPass() { //ternary operator

//     let Marks = 59
//     let result = (Marks > 60) ?"Pass" : "Fail";

//     console.log(result);
// }
// isPass();  

// function isEligible() {

//     let Age = 40
//     let result = (Age > 39) ?"eligible" : "noteligible";

//     console.log(result);
// }
// isEligible();

// //date-12-09
// //string(as a parameter) to change one of the letter
// function DNAtoRNA(dna) {
//     const rna=dna.replace(/T/g,'U')
//     return(rna)
//   }
  
//   //a leap year finding system.
//   function leapYear(year) {
//     if (year%4==0) {
//       return "its a leap year"
//         if (year%100==0) {
//           if(year%400==0) {
//             return "its a leap year"
//           }
//             return "its not a leap year"
//         }
//         else {
//             return "its not a leap year"
//         }
//     }
//     else {
//         return "not a leap year"
//     }
// }
// console.log(leapYear(A))

// //date-13-09
// //1
// console.log(true.toString()); // Output: "true"
// console.log(false.toString()); // Output: "false"

// //2
// function containsValue(arr, x) {
//     // Check if the array contains the value x
//     return arr.includes(x);
//   }

// //3
// function removeSpaces(inputString) {
//     // Replace all spaces with an empty string
//     const result = inputString.replace(/\s/g, '');
//     return result;
//   }
  
// //4
// function isIsogram(inputString) {
//     // Convert the string to lowercase for case-insensitive comparison
//     const lowercaseString = inputString.toLowerCase();
  
//     // Create a set to track seen letters
//     const seenLetters = new Set();
  
//     // Iterate through each character in the string
//     for (const char of lowercaseString) {
//       // If the character is already in the set, it's not an isogram
//       if (seenLetters.has(char)) {
//         return false;
//       }
//       // Otherwise, add it to the set
//       seenLetters.add(char);
//     }
  
//     // If we've checked all characters without finding repeats, it's an isogram
//     return true;
//   }
  
// //5
// if (Number.isInteger(b)==true) {
//     console.log(true)
// }

// //6
// function getCount(str) {
//     const count = new Set();
//     count.add("a");
//     count.add("e");
//     count.add("i");
//     count.add("o");
//     count.add("u");
//     let countnum =0
//     for (const item of str) {
//       if (count.has(item)) {
//          countnum++
//       }
//     }
//     return countnum;
//   }

// //7
//   function categorizeMembers(members) {
//     const result = [];

//     for (const [age, handicap] of members) {
//         if (age >= 55 && handicap > 7) {
//             result.push("Senior");
//         } else {
//             result.push("Open");
//         }
//     }

//     return result;
// }

// //8
// function reverseString(inputString) {
//   return inputString.split('').reverse().join(''); 
// }

// //date 18-09
// //9
// function isPrime(number) {
//   if (number <= 1) {
//       return false; // Numbers less than or equal to 1 are not prime
//   }

//   // Check for divisors from 2 up to the square root of the number
//   for (let i = 2; i <= Math.floor(number/2); i++) {
//       if (number % i === 0) {
//           return false; // Found a divisor, not prime
//       }
//   }

//   return true; // No divisors found, prime number
// }

// function printPrimes(limit) {
//   for (let num = 2; num <= limit; num++) {//num a variable become a input for function check prime,ITS CALLING THAT FUNCTION
//       if (isPrime(num)) {
//           console.log(num);
//       }
//   }
// }
// console(printPrimes(10)) //for some reason its giving last value as undefined
// printPrimes(10)//its giving the correct output.

// //date 19-09
// //1
// function smallEnough(a, limit) {
//   return a.every(x => x <= limit);//it checks the condition all the values of arrays and prints true or false
// }

// //date 25-09
// //1 bugs
// const person = {
//   name: 'Alice',
//   greet: function() {
//       return `Hello, my name is ${this.name}!`;
//   }
// };

// console.log(person.greet()); // Output: Hello, my name is Alice!

// const person = {
//   name: 'Alice',
//   greet: () => {
//       return `Hello, my name is ${person.name}!`;
//   }
// };

// console.log(person.greet()); // Output: Hello, my name is Alice!

// //date 30-09-24
// //1 to convert every first letter to uppercase(jaden case)
// String.prototype.toJadenCase = function () {
//   return this.split(' ') // Split the string into words
//              .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
//              .join(' '); // Join the words back into a single string
// };

// // Example usage:
// const str = "How can mirrors be real if our eyes aren't real";
// console.log(str.toJadenCase()); // "How Can Mirrors Be Real If Our Eyes Aren't Real"

// //2
// function extractNumber(str) {
//   // Use a regular expression to match all digits in the string
//   const numberString = str.match(/\d+/g);
  
//   // If we found any digits, join them; otherwise return null
//   return numberString ? numberString.join('') : null;
// }

// // Usage examples
// console.log(extractNumber("Oh, no! The number is 12345!")); // Output: "12345"
// console.log(extractNumber("Mixing text 42 with numbers 678.")); // Output: "42678"
// console.log(extractNumber("No numbers here!")); // Output: null


// //date:06-10
// //1 - endswith
// function solution(str, ending) {
//   // Check if the str ends with the given ending
//   return str.endsWith(ending);
// }

// // Examples
// console.log(solution('abc', 'bc')); // returns true
// console.log(solution('abc', 'd'));  // returns false

// //2 --arrays
// function Add(arr,target) {
//   for (let i=0;i<arr.length;i++) {
//       for (let j=0;j<arr.length;j++) {
//           if(arr[i]+arr[j]===target) {
//               return [i,j]
//           }
//       }
//   }
// }
// console.log(Add([2,3,4,5,6],6))

// //3 --knowing charcodes
// let a ="a"
// let b = String.fromCharCode(a.charCodeAt(0)+1)
// console.log(b)

// //4 -- letter replaces by the after letters
// let c1 = "hello"
// let result =''//item can not be manipulated or changed
//  for(let item of c1) {
//         if(item =="z") {
//             result += "a"
//         }
//         else{
//             result += String.fromCharCode(item.charCodeAt(0) + 1) 
//         }
//     }
// console.log(result)

// //5 -encrypt secrest code
// function encrypt(passcode) {
//   let a1 = passcode[0].toUpperCase().charCodeAt(0)-64
//   let a2 = passcode[2].toUpperCase().charCodeAt(0)-64
//   let a3 = ""+a1+passcode[1]+a2
  
//   let b1= passcode.slice(3,6).split('').reverse().join('')
  
//   let c1= passcode.slice(6,9)  
//   let c2 = ""
//   for(let item of c1) {
//       if(item =="z") {
//           c2 += "a"
//       }
//       else{
//           c2 += String.fromCharCode(item.charCodeAt(0) + 1) 
//       }
//   }
//   let result = b1 + c2 + a3
// return result
// }
// console.log(encrypt("jamesbond"))

// //6
// function letterToNum(letter) {
//   return letter.charCodeAt(0)-64
// }
// console.log(letterToNum("K"))

// function numToLetter(num) {
//   return String.fromCharCode(num+64)
// }
// console.log(numToLetter(2))

// //date:08-10
// //1 - rock paper scizzors
// const rps = (p1, p2) => {
//   if (p1 === p2) return "Draw!";
//   var rules = {rock: "scissors", paper: "rock", scissors: "paper"};
//   if (p2 === rules[p1]) {
//     return "Player 1 won!";
//   }
//   else {
//     return "Player 2 won!";
//   }
// };
// //just research
// const rps = (p1, p2) => {
//   if(p1 === p2) {
//     return 'Draw!'
//   }; 
//   return `Player ${/rockscissors|scissorspaper|paperrock/.test(p1+p2)? 1 : 2} won!`;
// }

// Date-14-11
// let now = new Date();

// // Get full year (e.g., 2024)
// console.log(now.getFullYear());  // 2024

// // Get month (0-11, where 0 = January, 1 = February, etc.)
// console.log(now.getMonth());  // 10 (November)

// // Get day of the month (1-31)
// console.log(now.getDate());  // 14

// // Get day of the week (0-6, where 0 = Sunday, 1 = Monday, etc.)
// console.log(now.getDay());  // 3 (Wednesday)

// // Get hours (0-23)
// console.log(now.getHours());  // 12

// // Get minutes (0-59)
// console.log(now.getMinutes());  // 30

// // Get seconds (0-59)
// console.log(now.getSeconds());  // 15

// // Get milliseconds (0-999)
// console.log(now.getMilliseconds());  // 123

// let date = new Date();

// // Set year, month, date
// date.setFullYear(2025);
// date.setMonth(0);  // January (0)
// date.setDate(1);   // 1st day of the month

// console.log(date);  // "2025-01-01T00:00:00.000Z"

// let now = new Date();
// console.log(now.toLocaleDateString());  // e.g., "11/14/2024" (US locale)
// console.log(now.toLocaleDateString('en-GB'));  // e.g., "14/11/2024" (UK locale)
// console.log(now.toLocaleDateString('de-DE'));  // e.g., "14.11.2024" (German locale)

// let now = new Date();
// console.log(now.toLocaleTimeString());  // e.g., "12:30:15 PM"
// console.log(now.toLocaleTimeString('en-GB'));  // e.g., "12:30:15"
// console.log(now.toLocaleTimeString('en-US', {hour12: true}));  // e.g., "12:30:15 PM"

// let now = new Date();
// console.log(now.toLocaleString());  // e.g., "11/14/2024, 12:30:15 PM"
// console.log(now.toLocaleString('en-GB'));  // e.g., "14/11/2024, 12:30:15"

// let now = new Date();
// now.setDate(now.getDate() + 5);  // Add 5 days to the current date
// console.log(now);  // 5 days later

// let now = new Date();
// now.setDate(now.getDate() - 5);  // Subtract 5 days from the current date
// console.log(now);  // 5 days ago

// let now = new Date();

// // UTC Methods
// console.log(now.getUTCFullYear());  // UTC year  Universal coordinated time.
// console.log(now.getUTCMonth());     // UTC month
// console.log(now.getUTCDate());      // UTC day

// // Local Methods
// console.log(now.getFullYear());    // Local year
// console.log(now.getMonth());       // Local month
// console.log(now.getDate());        // Local day

// Numbers types
// let number = 123.456789;

// // Print with 2 decimal places
// console.log(number.toPrecision(5));  // Output: 123.46
