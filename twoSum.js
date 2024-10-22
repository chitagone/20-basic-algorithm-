function twoSum(nums, target) {
  // Create an empty object to store numbers and their indices.
  const numMap = {};

  // Loop through the array of numbers.
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]; // Current number.
    const complement = target - num; // Find the complement (what number is needed to add up to the target).

    // Check if the complement exists in the object (we've seen it before).
    if (numMap[complement] !== undefined) {
      // If found, return the indices of the complement and the current number.
      return [numMap[complement], i];
    }

    // Otherwise, store the current number in the object with its index.
    numMap[num] = i;
  }

  // If no pair is found that sums up to the target, return an empty array.
  return [];
}
const nums = [2, 7, 11, 15];
const target = 9;
const result = twoSum(nums, target);
console.log(result); // Output: [0, 1]

// Explanation:
// nums[0] + nums[1] = 2 + 7 = 9 (which equals the target).
// The function returns [0, 1], which are the indices of the numbers 2 and 7.
