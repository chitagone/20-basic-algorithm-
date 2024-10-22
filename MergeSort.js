// Main function to implement Merge Sort
function mergeSort(arr) {
  // Base case: if the array has 1 or fewer elements, it's already sorted
  if (arr.length <= 1) {
    return arr; // Simply return the array
  }

  // Find the middle index to split the array into two halves
  const mid = Math.floor(arr.length / 2);

  // Slice the array into a left half and a right half
  const left = arr.slice(0, mid); // Elements from index 0 to mid - 1
  const right = arr.slice(mid); // Elements from index mid to end

  // Recursively call mergeSort on both halves to continue splitting until the base case
  const sortedLeft = mergeSort(left); // Sort the left half
  const sortedRight = mergeSort(right); // Sort the right half

  // Merge the two sorted halves back together into a single sorted array
  return merge(sortedLeft, sortedRight);
}

// Function to merge two sorted arrays into one sorted array
function merge(left, right) {
  let result = []; // Array to store the merged result
  let leftIndex = 0; // Pointer to traverse the left array
  let rightIndex = 0; // Pointer to traverse the right array

  // Traverse both arrays, comparing elements and merging them into the result array
  while (leftIndex < left.length && rightIndex < right.length) {
    // If the current element in the left array is smaller, add it to the result
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++; // Move the pointer in the left array to the next element
    } else {
      // Otherwise, add the element from the right array to the result
      result.push(right[rightIndex]);
      rightIndex++; // Move the pointer in the right array to the next element
    }
  }

  // Once one of the arrays is exhausted, concatenate the remaining elements
  // from either the left or right array (whichever still has elements)
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// Test case to demonstrate how merge sort works
const arr = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(arr)); // Output: [3, 9, 10, 27, 38, 43, 82]
