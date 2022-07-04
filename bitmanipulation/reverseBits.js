/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
 const reverseBits = (n) => {
    let r = 0;
    for (let bit = 0; bit < 32; bit++) {
      r <<= 1;
      console.log(r.toString(2), "r",n.toString(2))
      r |= n & 1
      console.log(r.toString(2), "r|", n.toString(2))
      n >>>= 1;
    console.log(n.toString(2))
    console.log("___________________")
    }
console.log(r >>> 0);
};

reverseBits(00000010100101000001111010011100)