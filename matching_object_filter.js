function whatIsInAName(collection, source) {
    return collection.filter(function(obj) {
        return Object.keys(source).every(function(key) {
            return obj[key] === source[key];
        });
    });
}

console.log(
    whatIsInAName(
        [{ first: "Romeo", last: "Montague" }, { first: "Juliet", last: "Capulet" }],
        { last: "Capulet" }
    )
);
