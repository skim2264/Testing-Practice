const reverseString = require('../code/reverseString');

test('Reverses string "car" to "rac"', () => {
    expect(reverseString("car")).toBe("rac");
})

test('Reverses string "precious" to "suoicerp"', () => {
    expect(reverseString("precious")).toBe("suoicerp");
})

test('Keeps spaces in sentence', () => {
    expect(reverseString("hello my name is")).toBe("si eman ym olleh");
})

test('Alerts if a string is not inputted (number input)', () => {
    expect(reverseString(4)).toBe("Please input a string");
})

test('Alerts if a string is not inputted (array input)', () => {
    expect(reverseString([4,"sfsd", 0])).toBe("Please input a string");
})