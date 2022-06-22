/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var maxSlidingWindow = function(nums, k) {
    let max = [];
    let i = 0;
    let j = 0;
    let s = [];
    while (j < nums.length) {
      if (j - i + 1 < k) {
        s.push(nums[j])
        j++;
      } else if (j - i + 1 === k) {
        s.push(nums[j])
        if (i > 0) {
          s = s.slice(1, s.length)
        }
        max.push(Math.max(...s))
        i++;
        j++;
      }
    }
    console.log(max); 
  };
  
  maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3)