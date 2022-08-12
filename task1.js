var pattern = (value, key) => {
    let ans = ""
    let ar = {}
    for (let dict = 1; dict <= key; dict++) {
        ar[dict] = ""
    }
    let k = 1;
    let j = key;
    if (key === 1) {
        return value;
    }
    for (let i = 0; i < value.length; i++) {
        for (j = k; j <= key; j++) {
            if (value[i] !== undefined)
                ar[j] += value[i]
            i++
        }
        for (k = j - 2; k >= 1; k--) {
            if (value[i] !== undefined)
                ar[k] += value[i]
            if (k > 1) {
                i++
            }
        }
        k = k + 2;
    }

    Object.keys(ar).forEach((data) =>{
        ans+= ar[data];
    })
    return ans;
}

console.log(pattern("soniadua", 3));
