const maximumSumSubarray = (K, Arr, N) => {
    //code here
    let sum = 0;
    let max = 0
    let j = 0;
    let i = 0;
    while (j < N) {
        if (j - i + 1 < K) {
            sum += Arr[j];
            j++
        }
        else if (j - i + 1 === K) {
            sum += Arr[j];
            max = max > sum ? max : sum;
            sum = sum - Arr[i];
            i++;
            j++;
        }
    }
    console.log(max);
}
maximumSumSubarray(2, [100, 200, 300, 400], 4)