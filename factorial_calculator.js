const num = 15;

function factorialCalculator(n) {
    let result = 1;

    for (let i = 1; i < (n+1); i++) {
        result *= i;
    }

    return result;
}

const factorial = factorialCalculator(num);
const resultMsg = `Factorial of ${num} is ${factorial}`;

console.log(resultMsg);
