function bouncer(arr) {
    const bouncedArr = [];

    for (const i of arr) {
        if (i) {
            bouncedArr.push(i);
        }
    }

    return bouncedArr;
}
