function steamrollArray(arr) {
    let flat = [];

    for (let item of arr) {
        if (Array.isArray(item)) {
            flat.push(...steamrollArray(item));
        } else {
            flat.push(item);
        }
    }

    return flat;
}
