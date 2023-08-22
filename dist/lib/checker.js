export default function Checker(txt) {
    if (txt.length > 10)
        return true;
    if (txt === "")
        return "Err";
    return false;
}
