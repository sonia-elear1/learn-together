/**
 * Given a string you need to print the size and string of the longest possible 
 * substring that has exactly k unique characters.
 * Example:
 * Input: aabacbebebe, 3 Output: 7
 * Input: aaaa, 1 Output: 4
 */

const longestUnique = (str, k) => {
    let obj = {};
    let i = 0;
    let max = {max: 0 , idx: i};
    let j = 0;
    str = str.split("");
    while (j < str.length) {
        if (!obj[str[j]]) {
            obj[str[j]] = 1
        }
        else {
            obj[str[j]] += 1
        }
        if (Object.keys(obj).length < k) {
            j++
        }
        else if (Object.keys(obj).length === k) {
            max = max.max > (j - i + 1) ? {max: max.max, idx: max.idx} : {max: (j - i + 1), idx: i}
            j++ ; 
        }
        else if (Object.keys(obj).length > k) {
            while (Object.keys(obj).length > k) {
                obj[str[i]] = obj[str[i]] - 1
                if (obj[str[i]] === 0) {
                    delete obj[str[i]]
                }
                i++;
            }
            j++;
        }
    }
    console.log(max.max, str.splice(max.idx,max.max).join("") )
}

longestUnique("aabacbebebe", 3)