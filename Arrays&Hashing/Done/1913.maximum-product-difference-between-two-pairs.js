/*
 * @lc app=leetcode id=1913 lang=javascript
 *
 * [1913] Maximum Product Difference Between Two Pairs
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function (nums) {
  // Sort the array in ascending order
  nums.sort((a, b) => a - b);

  // Calculate the maximum product difference
  const n = nums.length;
  const maxProductDiff = nums[n - 1] * nums[n - 2] - nums[1] * nums[0];

  return maxProductDiff;
};
// // @lc code=end
