// method-1
function allCharactersUnique(str) {
    const charCount = {};

    for (let char of str) {
        if (charCount[char]) {
            return false;
        }
        charCount[char] = true;
    }

    return true;
}

// method-2
function allCharactersUnique_2(str) {
    const charSet = new Set();

    for (let char of str) {
        if (charSet.has(char)) {
            return false;
        }
        charSet.add(char);
    }

    return true;
}

console.log(allCharactersUnique("abacde"));
console.log(allCharactersUnique_2("abacde"));
