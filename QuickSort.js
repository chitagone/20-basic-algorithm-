function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[Math.floor(arr.length / 2)];
  const left = arr.filter((x) => x < pivot);
  const middle = arr.filter((x) => x === pivot);
  const right = arr.filter((x) => x > pivot);

  return quickSort(left).concat(middle, quickSort(right));
}

const arr = [15, 3, 9, 8, 5, 2, 7, 1, 6];
console.log(quickSort(arr));
