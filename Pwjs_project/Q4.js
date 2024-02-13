Question4
/*Use a ternary operator to check that a person is eligible to vote or not by checking 
 his age. If the age of theperson is less than 18 then “You cannot vote” should be logged else “You can vote” should be logged. */

let age = 16;
let Topup = age < 18 ? " you cannot vote" : "You can vote";
console.log(`your age  is ${age}  ${Topup}.`);
