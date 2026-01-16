function sumAll([n, m]) {
    let lower = Math.min(n, m);
    const higher = Math.max(n, m);
    let sum = 0;

    for (let i = lower; i <= higher; i++) {
        sum += i;
    }

    return sum;
}
