function toTitleCase(str) {
    let words = str.toLowerCase().split(" ");
    for (let idx in words) {
        words[idx] = words[idx][0].toUpperCase() + words[idx].slice(1);
    }
    return words.join(" ");
}

export default toTitleCase;
