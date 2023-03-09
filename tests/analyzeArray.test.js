const analyzeArray = require('../code/analyzeArray');

test('Average of [1,2,3] is 2', () => {
    expect(analyzeArray([1,2,3]).average).toBe(2);
});

test('Minimum of [1,2,3] is 1', () => {
    expect(analyzeArray([1,2,3]).min).toBe(1);
});

test('Maximum of [1,2,3] is 3', () => {
    expect(analyzeArray([1,2,3]).max).toBe(3);
});

test('Length of [1,2,3] is 3', () => {
    expect(analyzeArray([1,2,3]).length).toBe(3);
});

test('Input is an array', () => {
    expect(analyzeArray("Hello")).toBe("Please input an array.");
})