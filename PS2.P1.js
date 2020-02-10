/* PS 2 Problem 1. 2 generators implement a series of even
Fibonacci numbers. First generator returns Fibonacci numbers
starting at 0. Second obtains next number in sequence. Reject
if odd, ask for next. Emit if even. Use generators to print out
1st 6 even Fibonacci numbers. */

function* fibonacci() {
    yield 0;
    yield 1;
    let [val1, val2, result] = [0, 1, 0]
    while (true) {
        result = val1+val2
        val1 = val2
        val2 = result
        yield result
    }
}

function* evenFibonacci() {
    fib = fibonacci();
    while(true) {
        i = fib.next().value;
        if(i % 2 == 0)
            yield i;
    }
}

myFibs = evenFibonacci();
let count = 6;
while (count --> 0) {
    console.log(myFibs.next().value)
}