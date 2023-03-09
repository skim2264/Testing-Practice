const capitalize = require('../code/capitalize');

test('First letter of duck capitalized to Duck', () => {
    expect(capitalize('duck')).toBe('Duck');
})

test('First letter of rest capitalized to Rest', () => {
    expect(capitalize('rest')).toBe('Rest');
})

test('Capitalize if whitespace present in first char of string', () => {
    expect(capitalize(' hello')).toBe('Hello');
})

test('Capitalize first letter of a sentence', () => {
    expect(capitalize(" my name is Michelle")).toBe("My name is Michelle");
})

test('Not throw an error with number in front', () => {
    expect(capitalize("3 is my number")).toBe("3 is my number");
})