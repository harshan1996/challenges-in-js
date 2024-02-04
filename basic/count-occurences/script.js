// method-1
function countOccurrences1(str, character) {
    let count = 0;

    for (let char of str) {
        if (char === character) {
            count++;
        }
    }
    return count;
}

// method-2
function countOccurrences2(str, character) {
    return str.split(character).length - 1;
}

export { countOccurrences1, countOccurrences2 };
