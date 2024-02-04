import { calculator2 } from "./script.js";

test("Performing arithmetic operations using the calculator function", () => {
    // Test case inputs
    const num1 = 5;
    const num2 = 7;

    // Addition
    expect(calculator2(num1, num2, "+")).toBe(12);
    // Subtraction
    expect(calculator2(num1, num2, "-")).toBe(-2);

    // Multiplication
    expect(calculator2(num1, num2, "*")).toBe(35);

    // Division
    expect(calculator2(num1, num2, "/")).toBeCloseTo(0.7143, 4);
});
