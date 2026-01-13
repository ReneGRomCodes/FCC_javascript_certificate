function fearNotLetter(s) {
    for (let i = 0; i < s.length - 1; i++) {
        const currentCode = s.charCodeAt(i);
        const nextCode = s.charCodeAt(i + 1);

        if (nextCode !== currentCode + 1) {
            return String.fromCharCode(currentCode + 1);
        }
    }

    return undefined;
}
