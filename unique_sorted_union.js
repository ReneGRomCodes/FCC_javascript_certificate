function uniteUnique(a, b, ...c) {
    const combined = [a, b, ...c].flat();
    const seen = new Set();
    const result = [];

    for (const value of combined) {
        if (!seen.has(value)) {
            seen.add(value);
            result.push(value);
        }
    }

    return result;
}
