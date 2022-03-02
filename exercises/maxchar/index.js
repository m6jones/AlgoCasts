// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let charCount = {};
    for (const char of str) {
        if (!charCount[char]) {
            charCount[char] = 0;
        }
        charCount[char]++;
    }

    return Object.keys(charCount).reduce((reducer, char) => {
        if (reducer.count < charCount[char]) {
            return {char, count: charCount[char]}
        }
        return reducer;
    }, {char: '', count: 0}).char;
}

module.exports = maxChar;
