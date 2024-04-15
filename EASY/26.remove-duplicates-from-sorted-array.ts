/*
 * @lc app=leetcode id=26 lang=typescript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
function removeDuplicates(nums: number[]): number {
  if (nums.length === 0) {
    return 0;
  }

  let k: number = 1;
  // pointer for the unique elements
  for (let i: number = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      console.log(nums[i]);
      console.log(nums[i - 1]);
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
}

// Test cases
let nums1: number[] = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(nums1));
// @lc code=end
