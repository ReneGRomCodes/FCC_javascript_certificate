function generatePassword(n) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    let password = "";

    for (let i = 0; i < n; i++) {
        password += chars[Math.floor(Math.random() * (chars.length + 1))];
    }

    return password;
}

const password = generatePassword(10);
console.log("Generated password: " + password);
