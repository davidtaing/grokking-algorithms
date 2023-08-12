function binarySearch(num: number, array: number[]): number | undefined {
  let left = 0;
  let right = array.length - 1;
  let mid = left;

  while (left <= right) {
    mid = left + Math.floor((right - left) / 2);

    if (array[mid] === num) return mid;

    if (num < array[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return undefined;
}

const testCases = [
  {
    num: 1,
    array: [1, 2, 3],
    expected: 0,
  },
  {
    num: 3,
    array: [1, 2, 3],
    expected: 2,
  },
];

test.each(testCases)(
  "finds $num in $array and returns $expected",
  ({ num, array, expected }) => {
    const actual = binarySearch(num, array);

    expect(actual).toBe(expected);
  }
);
