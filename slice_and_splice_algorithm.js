function frankenSplice(arr1, arr2, index) {
    return [
        ...arr2.slice(0, index),
        ...arr1,
        ...arr2.slice(index)];
}
