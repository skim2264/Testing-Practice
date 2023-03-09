function analyzeArray(arr) {
    if (!Array.isArray(arr)) return "Please input an array.";

    const len = arr.length;
    const minVal = Math.min(...arr);
    const maxVal = Math.max(...arr);
    const sum = arr.reduce((x,y) => x+y, 0);
    const avgVal = sum/len;

    return {average: avgVal, min:minVal, max:maxVal, length: len};
}

module.exports = analyzeArray;