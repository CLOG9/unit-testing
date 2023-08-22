export default function Checker(txt: string): true | false | "Err" {
  if (txt.length > 10) return true;
  if (txt === "") return "Err";
  return false;
}
