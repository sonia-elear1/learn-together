/**
 * Find the largest subarray size whose sum is equal to k (all positive numbers)
 */
const largestSubarrSize = (arr, k) => {
    let sum = 0;
    let max = 0;
    let i = 0;
    let j = 0;
    while (j < arr.length) {
        sum += arr[j];
        if (sum < k) {
            j++
        }
        else if (sum === k) {
            max = max > (j - i + 1) ? max : (j - i + 1)
            j++
        }
        else if (sum > k) {
            while (sum > k) {
                sum = sum - Math.abs(arr[i]);
                i++;
            }
            j++;
        }
    }
    console.log(max);
}

largestSubarrSize([10, 5, 2, 7, 1, 9], 5)