/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function (height) {
    let i = 0;
    let j = height.length - 1;
    let max = 0;
    while (i < j) {
        let min = Math.min(height[i], height[j]);
        let sum = min * (j - i);
        max = max > sum ? max : sum;
        if (height[i] < height[j]) {
            i++;
        } else {
            j--;
        }
    }
    console.log(max)
};

maxArea([2, 3, 4, 5, 18, 17, 6])