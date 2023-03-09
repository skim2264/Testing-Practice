function caesarCipher(str, shift) {
    if (typeof shift != "number") return "Please enter a number for the shift input.";
    if (typeof str != "string") return "Please enter a string for the first argument.";

    let output = "";
    let curChar = "";

    for (let i = 0; i < str.length; i++) {
        curChar = str.charAt(i);
        let code = str.charCodeAt(i);
        if (curChar.match(/[a-z]/i)) {
            if (code >= 65 && code <= 90) {
                output += String.fromCharCode(((code - 65 + shift) % 26) + 65);
            } else if (code >= 97 && code <= 122) {
                output += String.fromCharCode(((code - 97 + shift) % 26) + 97)
            }
        } else {
            output += curChar;
        } 
    }

    return output;
}

module.exports = caesarCipher;
