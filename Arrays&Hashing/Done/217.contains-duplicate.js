/*
 * @lc app=leetcode id=217 lang=javascript
 *
 * [217] Contains Duplicate
 */

/* ■■■■■■■■■■■■■■■■■■■■■ GPT ■■■■■■■■■■■■■■■■■■■■■ */
// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
let nums = [1, 2, 3, 2];
let nums2 = [1, 2, 3, 4];
var containsDuplicate = function (nums) {
  //create an empty set
  let set = new Set();

  // Iterate through the array
  for (let num of nums) {
    // If the element is already in the set, it's a duplicate
    if (set.has(num)) {
      return true;
    }
    // Add the element to the set
    set.add(num);
  }

  // No duplicates found
  return false;
};

console.log(containsDuplicate(nums));
console.log(containsDuplicate(nums2));
// @lc code=end
