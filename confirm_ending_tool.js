function confirmEnding(string1, string2) {
    const lenString1 = string1.length;
    const lenString2 = string2.length;

    return string1.slice(lenString1-lenString2) === string2;
}
