/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isSubsequence = function(s, t) {
    let i = 0;
    let j = 0;
    let idx = []
    while(i<s.length && j<t.length){
        if(s[i]===t[j]){
            idx.push(j)
            i++;
            j++
        }
        else{
            j++
        }
    }
    if(idx.length === s.length) {
        return true
    }
    return false
};

isSubsequence("axc", "ahbgdc")