
const getBit = (number, bitPosition) => {
    return (number >> bitPosition) & 1;
  }
console.log("bitposition" , getBit(2, 0))