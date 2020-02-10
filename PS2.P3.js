/* PS2 Problem 3. Print cube value of input f(x) = x^3. Next,
* write 1 line to call the function on each value of array =
* [1,2,3,4,5,6,7] */

const cubeNum = input => input * input * input;
console.log([1,2,3,4,5,6,7].map(cubeNum))