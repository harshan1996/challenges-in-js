// This uses the Regular expressions to remove anything that is not alpha numerics
// method-1
const isPalindrome1 = (word) => {
    let reversedWord = "";
    let formattedWord = word.toLowerCase().replace(/[^a-z0-9]/g, "");
    for (let i = formattedWord.length - 1; i >= 0; i--) {
        reversedWord += formattedWord[i];
    }

    return reversedWord === formattedWord;
};

// method-2
const isPalindrome2 = (word) => {
    let formattedWord = "";

    for (let char of word) {
        // numbers and lowercase characters
        if (
            (char.charCodeAt() >= 48 && char.charCodeAt() <= 57) ||
            (char.charCodeAt() >= 97 && char.charCodeAt() <= 122)
        )
            formattedWord += char;
    }
    return formattedWord === formattedWord.split("").reverse().join("")
        ? true
        : false;
};

export { isPalindrome1, isPalindrome2 };
