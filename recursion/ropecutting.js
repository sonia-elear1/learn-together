// Rope Cutting Problem

ropeCutting = (n, a, b, c) => {
    if (n === 0) {
        return 0
    }
    if (n < 0) {
        return - 1
    }
    else {
        let res = Math.max(ropeCutting(n - a, a, b, c), ropeCutting(n - b, a, b, c),
            ropeCutting(n - c, a, b, c))
        if (res === -1) return -1
        return res + 1
    }
}

console.log(ropeCutting(9, 2, 2, 2))
