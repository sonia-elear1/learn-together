/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    const number = new Map();
    for(let i=0; i<nums.length; i++) {
        // console.log(number)
        if(number.has(target- nums[i])){
            return [number.get(target-nums[i]), i ]
        }
         number.set(nums[i], i)
        };
  };