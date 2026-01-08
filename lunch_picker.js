const lunches = [];

function addLunchToEnd(arr, s) {
    arr.push(s);
    console.log(`${s} added to the end of the lunch menu.`);

    return arr;
}

function addLunchToStart(arr, s) {
    arr.unshift(s);
    console.log(`${s} added to the start of the lunch menu.`);

    return arr;
}

function removeLastLunch(arr) {
    if (arr.length > 0) {
        const lastItem = arr.pop()
        console.log(`${lastItem} removed from the end of the lunch menu.`);
    } else {
        console.log("No lunches to remove.");
    }

    return arr;
}

function removeFirstLunch(arr) {
    if (arr.length > 0) {
        const firstItem = arr.shift()
        console.log(`${firstItem} removed from the start of the lunch menu.`);
    } else {
        console.log("No lunches to remove.");
    }

    return arr;
}

function getRandomLunch(arr) {
    if (arr.length > 0) {
        console.log(`Randomly selected lunch: ${arr[Math.floor(Math.random() * arr.length)]}`)
    } else {
        console.log("No lunches available.")
    }
}

function showLunchMenu(arr) {
    if (arr.length === 0) {
        console.log("The menu is empty.");
    } else {
        console.log("Menu items: " + arr.join(", "));
    }
}
