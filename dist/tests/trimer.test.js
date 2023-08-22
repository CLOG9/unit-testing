import { expect, test } from "vitest";
import trimer from "../lib/trimer.js";
test(`check if dfqdlsjfldsqjffsqfqsfqqsdfsq is dfqdlsjfldsqjffsqfqsfqqsdfsq`, () => {
    expect(trimer("dfqdlsjfldsqjffsqfqsfqqsdfsq")).toEqual("dfqdlsjfldsqjffsqfqsfqqsdfsq");
});
test(`check if dfqdlsjfldsqj ffsqfqsfqqsdfsq is dfqdlsjfldsqjffsqfqsfqqsdfsq`, () => {
    expect(trimer("dfqdlsjfldsqj ffsqfqsfqqsdfsq")).toEqual("dfqdlsjfldsqjffsqfqsfqqsdfsq");
});
test(`check if dfqd-lsj fldsqj ffsq-,fqs,*fqq sdf*sq is dfqdlsjfldsqjffsqfqsfqqsdfsq`, () => {
    expect(trimer("dfqd-lsj fldsqj ffsq-,fqs,*fqq sdf*sq")).toEqual("dfqdlsjfldsqjffsqfqsfqqsdfsq");
});
test(`check if  is `, () => {
    expect(trimer("")).toEqual("");
});
