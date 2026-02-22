function smallestCommons(arr) {
    // Sort the array to get min and max.
    const [min, max] = arr[0] < arr[1] ? arr : [arr[1], arr[0]];

    // Create the full range of numbers.
    const range = [];
    for (let i = min; i <= max; i++) {
        range.push(i);
    }

    // Function to compute GCD.
    const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
    // Function to compute LCM of two numbers.
    const lcm = (a, b) => (a * b) / gcd(a, b);

    // Reduce the range to a single LCM.
    return range.reduce((multiple, current) => lcm(multiple, current));
}
