function pairElement(s) {
    const pairs = {
        "A": "T",
        "T": "A",
        "C": "G",
        "G": "C",
    };

    const bases = s.split("");
    const basePairs = [];

    for (let char of bases) {
        basePairs.push([char, pairs[char]]);
    }

    return basePairs;
}
