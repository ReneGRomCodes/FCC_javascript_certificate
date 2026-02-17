function sortAscending(a, b) {
    if (a < b) {
        return -1;
    } else if (a > b) {
        return 1;
    } else {
        return 0;
    }
}

function getIndexToIns(arr, n) {
    arr.sort(sortAscending);
    const index = arr.findIndex(m => n <= m);
    return index === -1 ? arr.length : index;
}
