/**
 * Given an array of integers nums, calculate the pivot index of this array.
 * The pivot index is the index where the sum of all the numbers strictly to
 *  the left of the index is equal to the sum of all the numbers strictly to 
 * the index's right.
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
    const sum = nums.reduce((total,item) => total + item, 0)
    let left  = 0
    for(let i = 0; i<nums.length; i++) {
        let right = sum - left - nums[i];
        if(left === right) {
            console.log(i)
            return i
        }
        left+=nums[i]
    }
    return -1
    // let j = nums.length - 1
    // let i = 0
    // let temp = Array(nums.length).fill(0);
    // let temp1 = Array(nums.length).fill(0);
    // let dict = {}
    // while (j >= 0) {

    //     if (j === nums.length - 1) {
    //         temp[j] = nums[j]
    //     }
    //     else {
    //         temp[j] = nums[j] + temp[j + 1]
    //     }
    //     dict[j] = {
    //         "index": j,
    //         "rightSum": temp[j],
    //         "leftSum": 0,
    //     }
    //     j--;
    // }
    // while (i < nums.length) {
    //     if (i === 0) {
    //         temp1[i] = nums[i]
    //     }
    //     else {
    //         temp1[i] = nums[i] + temp1[i - 1]
    //     }
    //     dict[i].leftSum = temp1[i]
    //     i++;
    // }
    // for (let idx = 0; idx < Object.keys(dict).length; idx++) {
    //     if (dict[idx].leftSum === dict[idx].rightSum) {
    //         return dict[idx].index
    //     }
    // };
    // return -1
};
pivotIndex([1,7,3,6,5,6])

