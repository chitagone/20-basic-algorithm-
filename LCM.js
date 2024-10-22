// Function to calculate the GCD using Euclidean algorithm
function gcd(a, b) {
  while (b !== 0) {
    const temp = a;
    a = b;
    b = temp % b;
  }
  return a;
}

// Function to calculate the LCM
function lcm(a, b) {
  return Math.abs(a * b) / gcd(a, b);
}

// Example usage:
console.log(lcm(12, 18)); // Output: 36
console.log(lcm(7, 5)); // Output: 35
