const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
    if (strokes === 1) {
        return "Hole-in-one!";
    } else if (strokes <= (par-2)) {
        return "Eagle";
    } else if (strokes <= (par-1)) {
        return "Birdie";
    } else if (strokes === par) {
        return "Par";
    } else if (strokes === (par+1)) {
        return "Bogey";
    } else if (strokes === (par+2)) {
        return "Double Bogey";
    } else if (strokes >= (par+3)) {
        return "Go Home!";
    }
}


// Alternative version using booleans assigned to variables. Doesn't add much except making the conditional block cleaner.
function golfScoreAlt(par, strokes) {
    const isHoi = strokes === 1;
    const isEagle = strokes <= par-2;
    const isBirdie = strokes <= par-1;
    const isPar = strokes === par;
    const isBogey = strokes === par+1;
    const isDoubleBogey = strokes === par+2;

    if (isHoi) {
        return "Hole-in-one!";
    } else if (isEagle) {
        return "Eagle";
    } else if (isBirdie) {
        return "Birdie";
    } else if (isPar) {
        return "Par";
    } else if (isBogey) {
        return "Bogey";
    } else if (isDoubleBogey) {
        return "Double Bogey";
    } else {
        return "Go Home!";
    }
}
