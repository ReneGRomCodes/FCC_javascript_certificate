function largestOfAll(arr) {
    const arrLargest = [];

    for (let i of arr) {
        arrLargest.push(Math.max(...i));
    }

    return arrLargest;
}
