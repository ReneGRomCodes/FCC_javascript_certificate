function findLongestWordLength(s) {
    const words = s.split(" ");
    let wordLength = 0;

    for (const word of words) {
        if (word.length > wordLength) {
            wordLength = word.length;
        }
    }

    return wordLength;
}
