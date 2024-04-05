/*
 * @lc app=leetcode id=459 lang=javascript
 *
 * [459] Repeated Substring Pattern
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
  const n = s.length;
  console.log(n);
  // Iterate over possible lengths of substrings
  for (let len = 1; len <= n / 2; len++) {
    // Check if the substring of length len repeats to form the original string
    console.log(len);
    if (n % len === 0) {
      const substring = s.substring(0, len);
      console.log(substring);
      const repeatedString = substring.repeat(n / len);

      // If the repeated string matches the original string, return true
      if (repeatedString === s) {
        return true;
      }
    }
  }

  // No valid substring found, return false
  return false;
};
let s = 'abcabcabc';
repeatedSubstringPattern(s);

// @lc code=end
