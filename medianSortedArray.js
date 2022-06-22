/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    let totalLen = nums1.length + nums2.length - 1;
    let num2Len = nums2.length - 1
    let num1Len = nums1.length - 1
    // merge two sorted arrays
    while (num2Len >= 0) {
        if (nums1[num1Len] > nums2[num2Len]) {
            nums1[totalLen] = nums1[num1Len];
            totalLen--;
            num1Len--;
        }
        else {
            nums1[totalLen] = nums2[num2Len];
            totalLen--;
            num2Len--;
        }
    }
    let val = (nums1.length / 2);
    if ((nums1.length) % 2 === 0) {
        let result = nums1[val] + nums1[val - 1]
        return result / 2
    }
    else {
        val = Math.floor(val)
        return nums1[val]
    }
};