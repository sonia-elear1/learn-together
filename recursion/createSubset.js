/**
 * @param {String} st
 * @return {number[][]}
 */
 var subsets = function(st) {
    let len = st.length;
    let i = 0 ;
    let curr = []
    let ans  = []
    function createSet(st,curr, i) {
        if(i=== len) {
            ans.push(curr)
        }
        else {
            createSet(st, curr, i+1);
            createSet(st, curr.concat(st[i]), i+1)
        }
    }
    createSet(st,curr,i)
    return ans
};

console.log(subsets([1,2,3]))