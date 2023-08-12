function binarySearch(num: number, array: number[]): number | undefined {
  /**
   *  left = start index of array
   *  right = end index of array
   *
   *  loop (forgot what invariant was) {
   *    // find mid index
   *    mid = left + (right - left) / 2  // note: need to use Math.floor since JS numbers are doubles
   *
   *    if array[mid] === num?
   *      return mid index
   *
   *    if array[mid] < num?
   *      move right index to mid
   *    else // array[mid] > num
   *      move left index to mid
   *
   *    move to next loop iteration
   *  }
   **/

  return 0;
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
