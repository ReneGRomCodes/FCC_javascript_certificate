function sumFibs(n) {
    let fib0 = 0;
    let fib1 = 1;
    let fib = 1;
    let sum = fib0;

    while (fib <= n){
        if (fib % 2) {
            sum += fib1;
        }
        fib = fib0 + fib1;
        fib1 += fib0;
        fib0 = fib1 - fib0;
    }

    return sum;
}
