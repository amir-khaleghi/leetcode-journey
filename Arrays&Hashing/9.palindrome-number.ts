/*
 * @lc app=leetcode id=9 lang=typescript
 *
 * [9] Palindrome Number
 */

// @lc code=start
function isPalindrome(x: number): boolean {
  const stringNumber = x.toString();
  console.log(stringNumber);
  const reverseString = stringNumber.split('').reverse().join('');
  console.log(reverseString);
  if (stringNumber === reverseString) {
    return true;
  }
  return false;
}
// @lc code=end
isPalindrome(121);
