import { expect, test } from "vitest";
import Checker from "../lib/checker.js";
test(`check if dfqdlsjfldsqjffsqfqsfqqsdfsq is bigger than 10 and it should be true`, () => {
    expect(Checker("dfqdlsjfldsqjffsqfqsfqqsdfsq")).toEqual(true);
});
test(`check if dfqdlsjflds is bigger than 10 and it should be false`, () => {
    expect(Checker("dfqdlsjflds")).toEqual(true);
});
test(`check if dfqdlsjflds is bigger than 10 and it should be false`, () => {
    expect(Checker("")).toEqual("Err");
});
