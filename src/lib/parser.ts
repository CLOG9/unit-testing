import Checker from "./checker.js";
import reverseString from "./reverser.js";
import splitStringInHalf from "./splitter.js";
import trimer from "./trimer.js";

export default function Parser(txt: string): [string[], string[]] | string {
  const trimed = trimer(txt);
  if (!Checker(trimed)) {
    return reverseString(trimed);
  } else {
    return splitStringInHalf(trimed);
  }
}
