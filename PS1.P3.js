/* PS 1 Problem 3: Write a function that accepts two input parameters: a string, and a function. The function
should execute the passed function with the passed string and return the result.

Next, write two expressions that call this function. For the first, pass the string
‘supercalifragilisticexpialidocious’ and a lambda function that returns an array containing
fragments of the input string broken on the character ‘c’. For the input string
‘supercalifragilisticexpialidocious’, you should get
    [‘super’, ‘califragilisti’, ‘cexpialido’, ‘cious’]

For the second, pass the string ‘supercalifragilisticexpialidocious’ and a lambda function that
replaces all of the ‘a’ characters with ‘A’ characters. Return an object that contains the original
string, the modified string, the total number of As in the modified string, and the overall length
of the modified string:
{
    originalString: xxx,
    modifiedString: xxx,
    numberReplaced: xxx,
    length:		    xxx
}
Print the data from the returned object on the console. */

const prob3 = (inputStr, func) => func(inputStr);
const cSplit = strToSplit => strToSplit.split(/(?=c)/);
const replaceA = strCapitalize => ({
    originalString: strCapitalize,
    modifiedString: strCapitalize.replace(/a/g,'A'),
    numberReplaced: strCapitalize.split("a").length - 1,
    length: strCapitalize.length
});

console.log(prob3('supercalifragilisticexpialidocious',cSplit));
console.log(prob3('supercalifragilisticexpialidocious',replaceA));