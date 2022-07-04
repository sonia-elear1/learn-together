/**
 * @param {number[]} arr
 * @param {number} l (starting index of the array i.e 0)
 * @param {number} r (ending index of the array i.e size-1)
 * @param {number} k
 * @return {number}
*/

const kthSmallest = (arr, l, r, k) => {
    //code here
    arr.sort((a,b) => a-b);
    let result = arr[k-1];
    console.log(result, arr)
}

kthSmallest([ 7, 10, 4, 3, 20, 15 ], 0, 5, 3)