function convertHTML(s) {
    const htmlEntities = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&apos;",
    };

    const sArr = s.split("");

    for (let i = 0; i < sArr.length; i++) {
        if (sArr[i] in htmlEntities) {
            sArr.splice(i, 1, htmlEntities[sArr[i]]);
        }
    }

    return sArr.join("");
}
