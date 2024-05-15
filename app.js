 
 
 const n1 = 15;
 const n2 = 20;
 const n3 = 10;
 const n4 = 5;

 /**Checking to see if all numbers are divisible by 5 */
const divide5 = ((n1%5) && (n2%5) && (n3%5) && (n4%5)) == 0;

console.log (divide5);

/**Check if the first number is larger than the last */

console.log(n1>n4);


 // Check one: add up to 50
 const isSum50 = (n1 + n2 + n3 + n4) == 50;

 /** Check two: at least two odd numbers
  * here, we use modulus to check if something is odd.
  * since % 2 is 0 if even and 1 if odd, we can use
  * arithmetic to count the total number of odd numbers.
  */
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 3) + (n4 % 2) >= 2;

/** Check Three: no number is larger than 25
 * this time, we use the OR operator to check
 * if ANY of the numbers are larger tha 25.
 */
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

/** Check four: all unique number
 * this is long, and there are more efficient
 * ways of handling it with other data structures
 * that we will review later.
 */
const isUnique =  n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

/** here we put the results into a single variable
 * for conveince, note how we negate isOver25 using
 * the ! operator we could also have tested for
 * "isUnder25" as an alternative.
 */
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

/** Finally, log the results */

console.log (isValid);

/** Heres another example of how this COULD be done
 * but it should not be done this way. As programmers,
 * we break things into small, manageable pieces so that 
 * they can be better understood, scaled, and maintained.
 */
//Part 2:Practical Math variables
let distance = 1500
let costOfGas = 3
let budget = 175
let at55Miles = 30
let at60Miles = 28
let at75Miles = 23
// Calculating how many gallons of fuel will be needed.Per milage
let gallonat55Miles = distance/at55Miles
let gallonat60Miles = distance/at60Miles
let gallon75Miles = distance/at75Miles
console.log(gallonat55Miles)
console.log(gallonat60Miles)
console.log(gallon75Miles)
let test1 = gallonat55Miles*costOfGas
let test2 = gallonat60Miles*costOfGas
let test3 = gallon75Miles*costOfGas
//Checking each fuel efficiency
console.log (test1);
console.log(test2);
console.log(test3);
// Will budget be enough?
console.log (budget>test1); // Budget is enough
console.log (budget>test2); // Budget is enough
console.log (budget>test3); // Budget is not enough
// Setting variables for Miles per hour
let milesPerHour1 = 55
let milesPerHour2 = 60
let milesPerHour3 = 75
// How long will the trip take, in hours?
console.log(distance/milesPerHour1);//at 55mies an hour it will take abot 27.27 hours
console.log(distance/milesPerHour2);// at 60 miles an hour it will take 25 hours
console.log(distance/milesPerHour3);// at 75 miles an hour iw will take 20 hours

