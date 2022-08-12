var arr = []
const towerOfHanoi = (n, a, b, c) => {
    if (n == 1) { 
        arr.push(`MOVE 1 FROM ${a} TO ${c}`)
        return
     }
    else {
        towerOfHanoi(n - 1, a, c, b)
        arr.push(`MOVE ${n} FROM ${a} TO ${c}`);
        towerOfHanoi(n - 1, b, a, c)
    }
    return arr;
}

console.log(towerOfHanoi(3, "A", "B", "C"))