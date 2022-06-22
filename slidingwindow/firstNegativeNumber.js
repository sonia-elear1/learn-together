const firstNegative = (k, arr) => {
    let l = [];
    let j = 0;
    let i = 0;
    let ans = []
    while(j<arr.length){
        if(j-i+1<k){
            if(arr[j]<0){
                l.push(arr[j])
            }
            j++;
        }
        else if(j -i + 1 === k) {
            if(arr[j]<0){
                l.push(arr[j])
            }
            l.length === 0 ? ans.push(0): ans.push(l[0]);
            if(l[0] === arr[i]){
                l.shift()
            };
            i++;
            j++
        }
    }
    console.log(ans);
}

firstNegative(2, [-8, 2, 3, -6, 10])