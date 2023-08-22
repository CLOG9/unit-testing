export default function splitStringInHalf(input: string): [string[], string[]] {
  const length = input.length;
  const middleIndex = Math.floor(length / 2);

  const firstHalf = input.slice(0, middleIndex);
  const secondHalf = input.slice(middleIndex);

  return [Array.from(firstHalf), Array.from(secondHalf)];
}
