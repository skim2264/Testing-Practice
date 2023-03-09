function reverseString(str) {
    if (typeof str != "string") return "Please input a string";
    let output = "";
    for (let i=str.length-1; i >= 0; i--) {
        output += str.charAt(i);
    }
    return output;
}

module.exports = reverseString;