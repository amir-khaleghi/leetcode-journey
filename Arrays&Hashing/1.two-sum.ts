/*
 * @lc app=leetcode id=1 lang=typescript
 *
 * [1] Two Sum
 */

// @lc code=start
// ─── Version 1 ────────────────────────────────────── 🟩 ─

// function twoSum(nums: number[], target: number): number[] {
//   for (let i = 0; i < nums.length - 1; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }
//   // If no pair is found, return an empty array
//   return [];
// }

// ─── Version 2 ────────────────────────────────────── 🟩 ─

function twoSum(nums: number[], target: number): number[] {
  const numMap: { [key: number]: number } = {};
  console.log(numMap);
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (numMap[complement] !== undefined) {
      console.log(numMap[complement]);
      return [numMap[complement], i];
    }
    numMap[nums[i]] = i;
  }

  return [];
}
// @lc code=end

const inputNum = [3, 2, 4, 6];
const targetNum = 9;
console.log(twoSum(inputNum, targetNum));
