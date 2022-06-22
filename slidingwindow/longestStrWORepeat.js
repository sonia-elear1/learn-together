/**
 * Given a string s, find the length and string of the longest substring without repeating characters.
 * 
 */

const longestSubStringWithoutRepeat = (s) => {
    s = s.split("");
    let i = 0;
    let j = 0;
    let max = s.length > 0 ? 1 : 0
    let obj = {};
    while (j < s.length) {
        if (!obj[s[j]]) {
            obj[s[j]] = 1
        }
        else {
            obj[s[j]] += 1
        }
        if (Object.keys(obj).length === j-i+1) {
            max = max > Object.keys(obj).length ? max : Object.keys(obj).length
            j++;
        }
        else {
            obj[s[i]] = obj[s[i]] - 1
            if (obj[s[i]] === 0) {
                delete obj[s[i]]
            }
            i++;
            j++;
        }
        console.log("ss", obj)
    }
    console.log(max)
}


longestSubStringWithoutRepeat("qrsvbspk")