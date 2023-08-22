export default function trimer(txt: string): string {
  return txt.replace(/[\d\W]/g, "");
}
