import { expect, test } from "vitest";
import reverseString from "../lib/reverser.js";
test(`check if abcdef is fedcba`, () => {
    expect(reverseString("abcdef")).toEqual("fedcba");
});
test(`check if abcdef45 is 54fedcba `, () => {
    expect(reverseString("abcdef45")).toEqual("54fedcba");
});
test(`check if is `, () => {
    expect(reverseString("")).toEqual("");
});
