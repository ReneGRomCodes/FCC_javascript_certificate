function chunkArrayInGroups(arr, n) {
    const chunkedArray = [];
    const n2 = arr.length / n;

    for (let i = 0; i < n2; i++) {
        chunkedArray.push(arr.splice(0, n));
    }

    return chunkedArray;
}
