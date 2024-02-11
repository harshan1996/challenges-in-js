function findFirstNonRepeat_1(str) {
    const charCount = {};

    for (let char of str) {
        // if (charCount[char]) {
        //     charCount[char] += 1;
        // } else {
        //     charCount[char] = 1;
        // }
        charCount[char] = (charCount[char] || 0) + 1;
    }

    for (let char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }
    // return charCount;
}

// method-2 using Map
function findFirstNonRepeat_2(str) {
    const charCount = new Map();

    for (let char of str) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }

    for (let char of str) {
        if (charCount.get(char) === 1) {
            return char;
        }
    }
}

console.log(findFirstNonRepeat_1("abcabcdefgg"));
console.log(findFirstNonRepeat_2("abcabcdefgg"));
