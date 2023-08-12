/**
 * Binary Search is a O(log N) time algorithm because we reduce the amount of items
 * by half each iteration.
 *
 * For an array of 4,294,967,296 items, it would take a maximum of 32 steps to find
 * the item. Imagine if you had to go through these one by one.
 **/
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
    num: 0,
    array: [],
    expected: undefined,
  },
  {
    num: 5,
    array: [1, 2, 3],
    expected: undefined,
  },
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
  {
    num: 20,
    array: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
    expected: 1,
  },
];

test.each(testCases)(
  "finds $num in $array and returns $expected",
  ({ num, array, expected }) => {
    const actual = binarySearch(num, array);

    expect(actual).toBe(expected);
  }
);
