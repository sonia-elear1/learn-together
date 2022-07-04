const reverseArr = (arr, size) => {
    if(arr.length!== size){

        return;
    }
    for(let i = 0 ; i < size; i++) {
        let el = arr.pop();
        arr.splice(i, 0, el);
    }
    console.log(arr);
    return
}
reverseArr([1,2,3,4], 4)