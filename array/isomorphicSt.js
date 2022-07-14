/**
 * @param {sring} s
 * @param {sring} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    let dict = {};
    let dict1 = {}
    t = t.split("")
    s = s.split("")
    let temp = [];
    let st = []
    for (let i = 0; i < s.length; i++) {
        dict[t[i]] = s[i]
        dict1[s[i]] = t[i]
    }
    for (let i = 0; i < t.length; i++) {
        temp[i] = dict[t[i]]
    }
    for (let i = 0; i < s.length; i++) {
        st[i] = dict1[s[i]]
    }
    s = s.join("");
    t = t.join("");
    temp = temp.join("");
    st = st.join("");
    console.log(dict, dict1, temp, st)
    if(temp === s && st ===t) {
        return true
    }
    return false
};

isIsomorphic("egg", "bar")