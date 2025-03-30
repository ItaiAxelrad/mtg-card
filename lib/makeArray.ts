export function makeArray(number: number): number[] {
  return [...Array(number || 0).keys()];
}
