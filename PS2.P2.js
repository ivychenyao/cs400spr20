/* PS2 Problem 2. Write a generator that is initialized with a
* sentence, emits each word of sentence in turn. Print words 1 per
* line, of string "All I know is something like a bird within her
* sang" */

function* wordInSent(str) {
    word = str.split(" ");
    i = -1;
    len = word.length;
    while(len--) {
        i++;
        yield word[i];
    }
}

myStr = "All I know is something like a bird within her sang";
let printWords = wordInSent(myStr);

while(myStr.length --> 0) {
    mySent = printWords.next();
    if(mySent.done == true)
        break;
    console.log(mySent.value);
}