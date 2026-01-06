function maskEmail(email) {
    const emailStart = email[0];
    const domainMarker = email.indexOf("@") - 1;  // '-1' to include last character of username.
    const domain = email.slice(domainMarker);
    const toMask = "*".repeat(email.slice(1, domainMarker).length);

    return emailStart + toMask + domain;
}

let email = "freecodecamp@example.com";
console.log(maskEmail(email));
