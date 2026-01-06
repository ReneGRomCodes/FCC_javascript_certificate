let count = 0;

function cardCounter(card) {
    if (card >= 2 && card <= 6) {
        count++;
    } else if (card === 10 || ["J", "Q", "K", "A"].includes(card)) {
        count--;
    }
    // else do nothing for 7, 8, 9
    return count > 0 ? count + " Bet" : count + " Hold";
}
