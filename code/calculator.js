const add = (x,y) => {
    return x + y;
};

const subtract = (x,y) => {
    return x - y;
};

const divide = (x,y) => {
    if (y===0) return "Error: cannot divide by 0.";
    return x/y;
};

const multiply = (x,y) => {
    return x * y;
};


const calculator = {
    add,
    subtract,
    divide,
    multiply,
};

module.exports = calculator;