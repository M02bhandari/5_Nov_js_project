// Question 2

/*In JavaScript, the comma operator allows you to evaluate multiple expressions within a single statement.
 It's primarily used in situations where multiple expressions need to be evaluated, such as in for loop headers,
  variable declarations, or function arguments.
 The comma operator evaluates each of its operands (from left to right) and returns the value of the last operand.
 */

// Example of using the comma operator
let a = 1, b = 2, c = 3;

// In this example, the comma operator is used in variable declaration
// The value of each variable is assigned sequentially, and the value of the last expression (c) is returned
console.log(a, b, c); // Output: 1 2 3

// Another example using the comma operator in a for loop
for (let i = 0, j = 10; i < j; i++, j--) {
    console.log(i, j); // Output: 0 10, 1 9, 2 8, ..., 9 1
}
