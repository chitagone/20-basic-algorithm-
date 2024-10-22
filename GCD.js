function gcd(a, b) {
  while (b !== 0) {
    const temp = a; // Store the value of a temporarily
    a = b; // Assign b to a
    b = temp % b; // Calculate the remainder and assign it to b
  }
  return a; // When b is 0, a is the GCD
}

console.log(gcd(48, 18)); // Output: 6 (GCD of 48 and 18)
console.log(gcd(56, 98)); // Output: 14 (GCD of 56 and 98)
