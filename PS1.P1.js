/* PS 1 Problem 1: Write a function that takes a string as its input and returns a new string that contains all of the
letters in the original string, but in alphabetical order. Ignore punctuation and numbers. Test
your function using the string ‘supercalifragilisticexpialidocious’. */

const alpha = inputStr => inputStr.split('').sort().join(''); // Convert str to array, sort array, then convert back to string again
console.log(alpha('supercalifragilisticexpialidocious'));