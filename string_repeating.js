function repeatStringNumTimes(s, n) {
    let repeatedString = "";

    if (n <= 0) {
        return repeatedString;
    }

    for (let i = 0; i < n; i++) {
        repeatedString += s;
    }

    return repeatedString;
}
