function capitalize(word) {
    word = word.trim();
    return word[0].toUpperCase() + word.slice(1);
}

module.exports = capitalize;