/**
 * Move all negative elements to end 
 * TODO : DO NOT CHANGE ORDER OF POSITIVE NUMBERS
 */
const segregateElements = (arr, n) => {
    //code here
    let j = n-1;
    let i = n-1
    while(j > 0) {
        if(arr[j] >= 0 ){
            j--
        }
        else {
            let temp = arr[i]
            arr[i] = arr[j];
            arr[j] = temp;
            i--;
        }
      
    }
    console.log(arr)
}

segregateElements([1, -1, 3, 2, -7, -5, 11, 6], 8)