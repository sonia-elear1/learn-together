/**
 * Count total digits in number
 */
countDigit = (num) => {
    let count = 0;
    while(num > 0) {
        num = Math.floor(num/10);
        count++
    }
    return count

}


/**
 * Palindrome is string
 */
checkStrPalindrom = (a) => {
    a = a.split("")
    let i = 0;
    let j = a.length-1
    while(i<=j){
        if(a[i]!==a[j]){
            return false
        }
      i++;
      j--;
    }
    return true
}

/**
 * check number is palindrome
 */
checkNumPalindrom = (num) => {
    let r = 0;
    let temp = num;
    while(temp!== 0){
        let t = temp%10;
        r = (r*10)+t;
        temp = Math.floor(temp/10)
    }
    console.log(r)
    return (r === num)
}

/**
 * print pattern
 * 1
 * 2 3
 * 4 5 6
 * 7 8 9 10
 * 11 12 13 14 15 
 */
printPattern = (len) => {
    let ans  = [];
    let result  = [];
    let count = 1;
    let i = 1
    while(i <= len) {
       let c = 1
       while(c <= i){
         ans.push(count)
         ++c
         ++count
       }
       i++;
       // console.log(ans)
       result.push(ans)
       ans  = []
    }
    return result
}

/**
 * factorial
 * 6 -> 720
 */
fact = (n) => {
    // Itreative solution -> more optimized
    let res = 1
    while(n > 0) {
        res = res*n;
        n--
    }
    return res

    // Recursive function -> 
    if(n === 0)
      return 1
    return n * fact(n-1);
}

/**
 * 
 */



console.log(countDigit(565890), "total digits")
console.log(checkStrPalindrom("sonios"), "check")
console.log(checkNumPalindrom(12321), "NUM PAL")
console.log(printPattern(5),"pattern")
console.log(fact(6), "factorial")