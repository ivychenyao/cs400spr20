/* PS 1 Problem 2: Write a function that takes as input each of the following strings in turn:
‘4+2’
‘5*7’
‘6-1’
‘9/2’
This function should
Determine the operator (+, *, -, or /) embedded in the string
Return a function to implement the input operator that returns the result

For example, if the input string is ‘8%3’, return (left, right) => left % right
Execute the returned function to evaluate and print each expression. For example,
const expression = '8%3';
let operator = evaluate(expression);
console.log(`${expression} = ${operator(expression)}`)

You can assume that the format of the input string is fixed (i.e. a digit, an operator, and a digit,
    always the same length). */

const mathOperation = inputStr => {
    const str = inputStr.split('');
    var left = parseInt(str[0]);
    var right = parseInt(str[2]);
    var operator = str[1];

    switch(operator) {
        case '+':
            return left + right;
            break;
        case '-':
            return left - right;
            break;
        case '*':
            return left * right;
            break;
        case '/':
            return left / right;
            break;
    }
}

console.log(mathOperation('4+2'));
console.log(mathOperation('5*7'));
console.log(mathOperation('6-1'));
console.log(mathOperation('9/2'));