function binarySearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    if (arr[mid] === target) {
      return mid; // target found
    } else if (arr[mid] < target) {
      low = mid + 1; // search right half
    } else {
      high = mid - 1; // search left half
    }
  }
  return -1; // target not found
}

const userIds = [101, 202, 303, 404, 505, 606, 707];
const targetId = 505;

const index = binarySearch(userIds, targetId);

if (index !== -1) {
  console.log(`User Id ${targetId} found at index ${index}`);
} else {
  console.log(`User ID ${targetName} not found in the dataset`);
}
