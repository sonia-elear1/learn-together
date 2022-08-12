/**
 * Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var setZeroes = function(matrix) {
    let row = matrix.length;
    let col = matrix[0].length;
    let zeroes = new Array();
    for(let i = 0;i < matrix.length;i++){
        for(let j=0; j< matrix[i].length; j++){
            if(matrix[i][j] === 0){
                zeroes.push({i,j})  
            }
        }
    }
  
     while(zeroes.length > 0){
         let x = zeroes[zeroes.length-1].i;
         let y = zeroes[zeroes.length-1].j;
         for(let i = 0 ; i < row; i++) {
             matrix[i][y] = 0
         }
         for(let i = 0 ; i < col; i++) {
             matrix[x][i] = 0
         }
         zeroes.pop()
     }
      
      return matrix
  };