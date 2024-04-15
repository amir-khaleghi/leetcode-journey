/*
 * @lc app=leetcode id=13 lang=typescript
 *
 * [13] Roman to Integer
 */

// @lc code=start
function romanToInt(s: string): number {
  const romanToIntMap: { [key: string]: number } = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let totalValue = 0;
  let preValue = 0;

  for (let i = 0; i < s.length; i++) {
    const value = romanToIntMap[s[i]];

    if (value > preValue) {
      totalValue += value - 2 * preValue;
    } else {
      totalValue += value;
      console.log(totalValue);
    }
    preValue = value;
  }
  return totalValue;
}
// @lc code=end

romanToInt('MCMXCIV');
