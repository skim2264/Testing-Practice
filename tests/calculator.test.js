const calculator = require('../code/calculator');

test('Add(1,2) is 3', () => {
    expect(calculator.add(1,2)).toBe(3);
});

test('Add(4,5) is 9', () => {
    expect(calculator.add(4,5)).toBe(9);
});

test('Subtract(3,1) is 2', () => {
    expect(calculator.subtract(3,1)).toBe(2);
});

test('Subtract(3,6) is -3', () => {
    expect(calculator.subtract(3,6)).toBe(-3);
});

test('Divide(4,2) is 2', () => {
    expect(calculator.divide(4,2)).toBe(2);
});

test('Divide(9,6) is 1.5', () => {
    expect(calculator.divide(9,6)).toBe(1.5);
});

test('Cannot divide by 0', () => {
    expect(calculator.divide(5,0)).toBe("Error: cannot divide by 0.");
})

test('Multiply(1,3) is 3', () => {
    expect(calculator.multiply(1,3)).toBe(3);
})