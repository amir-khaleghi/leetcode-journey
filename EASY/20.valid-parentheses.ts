/*
 * @lc app=leetcode id=20 lang=typescript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
function isValid(s: string): boolean {
  const stack: string[] = [];
  const bracketMap: { [key: string]: string } = {
    '(': ')',
    '{': '}',
    '[': ']',
  };

  for (let char of s) {
    console.log(bracketMap[char]);
    if (bracketMap[char]) {
      stack.push(char);
    } else {
      const lastBracket = stack.pop();
      if (!lastBracket || bracketMap[lastBracket] !== char) {
        return false;
      }
    }
  }

  return stack.length === 0;
}
// @lc code=end

isValid('()');
