function binarySearch(num: number, array: number[]): number | undefined {
  return undefined;
}

const testCases = [
  {
    num: 1,
    array: [1, 2, 3],
    expected: 0,
  },
];

test.each(testCases)(
  "finds $num in $array and returns $expected",
  ({ num, array, expected }) => {
    const actual = binarySearch(num, array);

    expect(actual).toBe(expected);
  }
);
