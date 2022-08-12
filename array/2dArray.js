/**
 * Integers in each row are sorted from left to right.
 * The first integer of each row is greater than the last integer of the previous row.
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
 var searchMatrix = function(matrix, target) {
    let first=0;
    let row = matrix.length-1
    for(let i =0;i<matrix.length-1;i++){
        if(target > matrix[i][first] && target<matrix[i+1][first]){
            row = i
            break;
        }
    }
    let col = matrix[row].findIndex(data => data===target)
    if(col === -1){
        return false
    }
    return true
};

/**
 * Test Case
 * searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]] , 3)
 * searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 13)
 */