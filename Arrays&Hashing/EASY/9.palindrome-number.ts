/*
 * @lc app=leetcode id=9 lang=typescript
 *
 * [9] Palindrome Number
 */

// @lc code=start
// function isPalindrome(x: number): boolean {
//   const stringNumber = x.toString();
//   const reverseString = stringNumber.split('').reverse().join('');
//   if (stringNumber === reverseString) {
//     return true;
//   }
//   return false;
// }
function isPalindrome(x: number): boolean {
  if (x < 0) {
    return false; // Negative numbers can't be palindromes
  }

  const stringNumber = x.toString();
  const length = stringNumber.length;
  for (let i = 0; i < length / 2; i++) {
    if (stringNumber[i] !== stringNumber[length - 1 - i]) {
      return false; // If characters don't match, it's not a palindrome
    }
  }
  return true;
}
// @lc code=end
isPalindrome(121);
