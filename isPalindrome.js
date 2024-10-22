function isPalindrome(s) {
  return s === s.split("").reverse().join("");
}

// Test cases
console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("racecar")); // true
