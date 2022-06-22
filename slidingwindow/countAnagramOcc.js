const countOccurenceOfAnagram = (pat, txt) => {
    let map1 = {};
    let map2 = {};
    let k = txt.length;
    let i = 0;
    let j = 0;
    let st = 0;
    let count = 0;
    while (st < k) {
      if (!map2[txt[st]]) {
        map2[txt[st]] = 1
      } else {
        map2[txt[st]] += 1
      }
      st++;
    }
    map2 = Object.fromEntries(Object.entries(map2).sort())
    while (j < pat.length) {
      if (j - i + 1 < k) {
        if (!map1[pat[j]]) {
          map1[pat[j]] = 1
        } else {
          map1[pat[j]] += 1
        }
        j++
      } else if (j - i + 1 === k) {
        if (!map1[pat[j]]) {
          map1[pat[j]] = 1
        } else {
          map1[pat[j]] += 1
        }
        let newObj = Object.fromEntries(Object.entries(map1).sort())
        if (JSON.stringify(newObj) === JSON.stringify(map2)) {
          count++;
        }
        map1[pat[i]]--;
        if (map1[pat[i]] === 0) {
          delete map1[pat[i]];
        }
        i++;
        j++;
      }
    }
    console.log(count)
    // return count;
  }
  
  countOccurenceOfAnagram("aabsbaaass", "abaa")
  