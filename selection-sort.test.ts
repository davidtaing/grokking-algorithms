export function selectionSort(array: number[]) {
  /**
   * Init new empty array
   *
   * Nested loops
   *  Find largest item and insert into results array
   *
   * Return results
   */

  return array;
}

const testCases = [
  {
    name: "handles empty array",
    array: [],
    expected: [],
  },
  {
    name: "handles array with one item",
    array: [],
    expected: [],
  },
  {
    name: "handles already sorted array",
    array: [1, 2, 3],
    expected: [1, 2, 3],
  },
];

test.each(testCases)("$name", ({ array, expected }) => {
  const actual = selectionSort(array);

  expect(actual).toMatchObject(expected);
});
