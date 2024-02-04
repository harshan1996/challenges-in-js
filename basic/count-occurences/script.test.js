import { countOccurrences2 } from "./script.js";

test("Count Occurrences of a Character", () => {
    expect(countOccurrences2("hello", "l")).toBe(2);
    expect(countOccurrences2("programming", "m")).toBe(2);
    expect(countOccurrences2("banana", "a")).toBe(3);
});
