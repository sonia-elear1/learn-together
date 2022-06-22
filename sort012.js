const sort012 = (arr) => {
    let arr1 = {};
    let i = 0
    while (i < arr.length) {
      if (!arr1[arr[i]]) {
        arr1[arr[i]] = 1
      } else {
        arr1[arr[i]] += 1
      }
      i++
    }
    let count = 0
    for (let i = 0; i < Object.keys(arr1).length; i++) {
      let key = Object.keys(arr1)[i]
      arr.fill(parseInt(key), count, (count + arr1[i]));
      count = count + arr1[i]
    }
    console.log(arr)
  }
  sort012([0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1])
  