const caesarCipher = require('../code/caesarCipher');

test('Wrapping from z to a', () => {
    expect(caesarCipher("why", 4)).toBe("alc");
});

test('Punctuation is unchanged', () => {
    expect(caesarCipher("hi!", 1)).toBe("ij!");
});

test('Letter cases are unchanged', () => {
    expect(caesarCipher("My name is Bob", 3)).toBe("Pb qdph lv Ere");
});

test('Check shift input is a number', () => {
    expect(caesarCipher("Bagels", "Hello")).toBe("Please enter a number for the shift input.")
})

test('Check if string input is a string', () => {
    expect(caesarCipher(45, 4)).toBe("Please enter a string for the first argument.");
})