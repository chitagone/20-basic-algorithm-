function maxSubarraySum(arr) {
  let maxSum = (currentSum = arr[0]);

  for (let num of arr.slice(1)) {
    currentSum = Math.max(num, currentSum + num);
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}
const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const result = maxSubarraySum(arr);
console.log(result); // Output: 6
