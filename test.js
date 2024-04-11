const isPalindrome = require('./index.js')

test('Palindrome test', () => {
  // Test palindrome strings
  expect(isPalindrome("A man, a plan, a canal, Panama")).toBe(true);
  expect(isPalindrome("racecar")).toBe(true);
  
  // Test non-palindrome strings
  expect(isPalindrome("hello")).toBe(false);
  expect(isPalindrome("12321")).toBe(true); // Numbers can be palindromes too
  expect(isPalindrome("not a palindrome")).toBe(false);
});
