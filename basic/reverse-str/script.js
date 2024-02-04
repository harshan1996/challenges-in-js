// method-1
const reverseString1 = (str) => str.split("").reverse().join("");

// method-2
const reverseString2 = (str) => {
    let reversedString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversedString += str[i];
    }
    return reversedString;
};
console.log(reverseString1("hello world"));
console.log(reverseString2("tall building"));
