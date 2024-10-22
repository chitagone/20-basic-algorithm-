function bubbleSort(arr) {
  const n = arr.length;
  let swapped;

  // Outer loop for each element in the array
  for (let i = 0; i < n; i++) {
    swapped = false; // Reset swapped flag for this pass

    // Inner loop for comparing adjacent elements
    for (let j = 0; j < n - 1 - i; j++) {
      // If the current element is greater than the next, swap them
      if (arr[j] > arr[j + 1]) {
        // Swap
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;

        swapped = true; // Set swapped flag to true
      }
    }

    // If no swaps occurred, the array is sorted
    if (!swapped) break;
  }

  return arr; // Return the sorted array
}

// Example usage
const userIds = [303, 101, 606, 404, 505, 707, 202];
const sortedUserIds = bubbleSort(userIds);

console.log(sortedUserIds); // Output: [101, 202, 303, 404, 505, 606, 707]
