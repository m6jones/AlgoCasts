// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    const isNegative = n >= 0 ? 1 : -1;
    n *= isNegative;
    let reverseInt = 0;
    while(Math.floor(n/10) > 0) {
        reverseInt *= 10;
        reverseInt += n % 10;
        n = Math.floor(n/10);
    }
    reverseInt *= 10;
    reverseInt += n;
    return isNegative * reverseInt;
}

module.exports = reverseInt;
