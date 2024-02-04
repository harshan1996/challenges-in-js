import toTitleCase from "./script.js";

test("Convert first character to UpperCase", () => {
    expect(toTitleCase("the sun is shining brightly")).toBe(
        "The Sun Is Shining Brightly"
    );
    expect(toTitleCase("programming iS FUN")).toBe("Programming Is Fun");
});
