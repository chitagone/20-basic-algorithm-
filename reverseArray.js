function reverseArray(arr) {
  const reversed = []; // Create a new array to hold the reversed elements

  // Loop through the original array from the last element to the first
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]); // Add each element to the new array
  }

  return reversed; // Return the new reversed array
}

// Example usage
const originalArray = [1, 2, 3, 4, 5];
const reversedArray = reverseArray(originalArray);

console.log(reversedArray); // Output: [5, 4, 3, 2, 1]
console.log(originalArray); // Output: [1, 2, 3, 4, 5] (original array remains unchanged)
