/** */
export function selectionSort(array: number[]) {
  if (array.length <= 1) return array;

  for (let outer = 0; outer < array.length; outer++) {
    let lowest = outer;

    for (let inner = outer + 1; inner < array.length; inner++) {
      if (array[inner] < array[lowest]) {
        lowest = inner;
      }
    }

    if (lowest !== outer) {
      swap(array, outer, lowest);
    }
  }

  return array;
}

function swap(array: number[], firstIndex: number, secondIndex: number) {
  const temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
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
  {
    name: "sorts reverse-ordered array",
    array: [3, 2, 1],
    expected: [1, 2, 3],
  },
  {
    name: "sorts array containing integers and non-integers",
    array: [4.5, 100, 1, 60, 120],
    expected: [1, 4.5, 60, 100, 120],
  },
];

test.each(testCases)("$name", ({ array, expected }) => {
  const actual = selectionSort(array);

  expect(actual).toMatchObject(expected);
});
