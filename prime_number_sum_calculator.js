function isPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;

    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) {
            return false;
        }
    }

    return true;
}


function sumPrimes(n) {
    let sum = 0;

    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) {
            sum += i;
        }
    }

    return sum;
}


console.log(sumPrimes(10));  // should return 17.
console.log(sumPrimes(5));  // should return 10.
console.log(sumPrimes(2));  // should return 2.
console.log(sumPrimes(0));  // should return 0.
console.log(sumPrimes(977));  // should return 73156.
