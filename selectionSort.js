function selectionSort(arr) {
  // Outer loop: iterates through the entire array
  for (let i = 0; i < arr.length; i++) {
    // Assume the current index is the index of the smallest element
    let minIdx = i;

    // Inner loop: compares the current element with the rest of the array
    for (let j = i + 1; j < arr.length; j++) {
      // If a smaller element is found, update the minIdx to this element's index
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }

    // Swap the current element with the smallest element found
    if (minIdx !== i) {
      [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
    }
  }
}

// Example usage:
const arr = [64, 25, 12, 22, 11];
selectionSort(arr);

console.log(arr); // Output: [11, 12, 22, 25, 64]
