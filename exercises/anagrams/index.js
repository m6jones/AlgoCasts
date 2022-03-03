// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    if (stringA.length !== stringB.length) return false;
    const lettersOfStringA = {}
    for (let charIndex = 0; charIndex < stringA.length; charIndex++) {
        const charA = stringA[charIndex].toLowerCase();
        if (isLetter(charA)) {
            if (!lettersOfStringA[charA]) {
                lettersOfStringA[charA] = 0;
            }
            lettersOfStringA[charA]++;
        }

        const charB = stringB[charIndex].toLowerCase();
        if (isLetter(charB)) {
            if (!lettersOfStringA[charB]) {
                lettersOfStringA[charB] = 0;
            }
            lettersOfStringA[charB]--;
        }
    }
    
    return !Object.values(lettersOfStringA).some((count) => count !== 0);
}

function anagrams2(stringA, stringB) {
    if (stringA.length !== stringB.length) return false;
    const lettersOfStringA = {}
    for (const char of stringA) {
        if (!isLetter(char)) continue;
        if (!lettersOfStringA[char.toLowerCase()]) {
            lettersOfStringA[char.toLowerCase()] = 0;
        }
        lettersOfStringA[char.toLowerCase()]++;
    }
    for (const char of stringB) {
        if (!isLetter(char)) continue;
        if (!lettersOfStringA[char.toLowerCase()] && lettersOfStringA[char.toLowerCase()] !== 0) return false;
        lettersOfStringA[char.toLowerCase()]--;
    }
    return !Object.values(lettersOfStringA).some((count) => count !== 0);
}

function isLetter(letterA) {
    return letterA.toUpperCase() !== letterA.toLowerCase();
}

module.exports = anagrams;
