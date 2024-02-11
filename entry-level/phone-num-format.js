// You can use a arrow function with implicit return to shorten the sloc.
function phoneNumberFormatter(array) {
    let formattedPhoneNumber = "";

    let areaCode = `${array.slice(0, 3).join("")}`;
    let hyphenatedPart = `${array.slice(3, 6).join("")}`;
    let lastSlice = `${array.slice(6).join("")}`;

    formattedPhoneNumber = `(${areaCode}) ${hyphenatedPart}-${lastSlice}`;

    return formattedPhoneNumber;
}

console.log(phoneNumberFormatter([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

// Additional point: When using slicing for strings, we can use slice or substring but substring considers negative indices as 0 whereas slice considers negative indices from the end of the string i.e -1 as the last element.
