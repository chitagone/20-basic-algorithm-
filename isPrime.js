function isPrime(n) {
  // If n is less than or equal to 1, it is not prime
  if (n <= 1) {
    return false;
  }

  // Check divisors from 2 to sqrt(n)
  for (let i = 2; i <= Math.sqrt(n); i++) {
    // If n is divisible by any i, then it is not prime
    if (n % i === 0) {
      return false;
    }
  }

  // If no divisors found, n is prime
  return true;
}

const result = isPrime(11);
const result2 = isPrime(12);

console.log(result);
console.log(result2);
