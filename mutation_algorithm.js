function mutation(arr) {
    const word1 = arr[0].toLowerCase();
    const word2 = arr[1].toLowerCase();

    for (const char of word2) {
        if (!word1.includes(char)) {
            return false;
        }
    }

    return true;
}
