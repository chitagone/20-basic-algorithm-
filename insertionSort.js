function insertionSort(arr) {
  // Loop through the array starting from the second element (i = 1)
  for (let i = 1; i < arr.length; i++) {
    // Store the current element in the variable 'key'
    let key = arr[i];
    // Initialize j to be the index of the element just before the current one (i - 1)
    let j = i - 1;

    // While there are still elements to compare (j >= 0) and key is smaller than arr[j], shift arr[j] to the right
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j]; // Shift element to the right
      j--; // Move j to the left
    }

    // Place the key at the correct position (j + 1)
    arr[j + 1] = key;
  }
  return arr; // Return the sorted array
}

// Test the function with an example array
const unsortedArray = [8, 3, 1, 5];
const sortedArray = insertionSort(unsortedArray);
console.log(sortedArray); // Output: [1, 3, 5, 8]
