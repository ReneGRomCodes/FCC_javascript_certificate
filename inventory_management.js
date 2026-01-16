const inventory = [];

function findProductIndex(productName) {
    return inventory.findIndex(
        product => product.name === productName.toLowerCase()
    );
}

function addProduct(product) {
    const index = findProductIndex(product.name);

    if (index !== -1) {
        inventory[index].quantity += product.quantity;
        console.log(`${inventory[index].name} quantity updated`);
    } else {
        inventory.push({
            name: product.name.toLowerCase(),
            quantity: product.quantity
        });
        console.log(`${product.name.toLowerCase()} added to inventory`);
    }
}

function removeProduct(productName, quantity) {
    const index = findProductIndex(productName);

    if (index === -1) {
        console.log(`${productName.toLowerCase()} not found`);
        return;
    }

    const product = inventory[index];

    if (product.quantity < quantity) {
        console.log(
            `Not enough ${product.name} available, remaining pieces: ${product.quantity}`
        );
        return;
    }

    product.quantity -= quantity;

    if (product.quantity === 0) {
        inventory.splice(index, 1);
    } else {
        console.log(
            `Remaining ${product.name} pieces: ${product.quantity}`
        );
    }
}
