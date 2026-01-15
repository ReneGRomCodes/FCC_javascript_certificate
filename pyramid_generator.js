function pyramid(char, rows, inverted) {
    const maxWidth = 2 * rows - 1;
    let result = "";

    let start, end, step;

    if (!inverted) {
        start = 0;
        end = rows - 1;
        step = 1;
    } else {
        start = rows - 1;
        end = 0;
        step = -1;
    }

    for (let i = start; inverted ? i >= end : i <= end; i += step) {
        const charCount = 2 * i + 1;
        const spaceCount = (maxWidth - charCount) / 2;

        const row =
            " ".repeat(spaceCount) +
            char.repeat(charCount);

        result += "\n" + row;
    }

    result += "\n";
    return result;
}
