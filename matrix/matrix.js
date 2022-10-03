class matrixQues {

    constructor() {
        this.arr = [];
    }
    /**
     * Ques 1: print matrix in snake pattern
     * @param arr - 2d arr
     * @return arr of pattern [1d]
     */
    printSnake = () => {
        let ans = []
        let row = this.arr.length
        let i = 0
        let reverse = false;
        while (i < row) {
            let col = this.arr[0].length - 1;
            if (reverse === false) {
                for (let j = 0; j <= col; j++) {
                    ans.push(this.arr[i][j])
                }
            }
            else {
                while (col >= 0) {
                    console.log(this.arr[i][col], i, col)
                    ans.push(this.arr[i][col])
                    col--
                }
            }
            i++;
            reverse = !reverse
        }
        return ans
    }

    /**
    * Print boundaries of matrix
    */
    printBoundaries = () => {
        let ans = []
        let row = this.arr.length
        let col = this.arr[0].length;
        if (row === 1) {
            for (let j = 0; j < col; j++) {
                ans.push(this.arr[0][j])
            }
        }
        else if (col === 1) {
            for (let i = 0; i < row; i++) {
                ans.push(this.arr[i][0])
            }
        }
        else {
            console.log(row, col)
            for (let i = 0; i < col; i++) {
                ans.push(this.arr[0][i])
            }
            for (let i = 1; i < row; i++) {
                ans.push(this.arr[i][col - 1])
            }
            for (let i = col - 2; i >= 0; i--) {
                ans.push(this.arr[row - 1][i])
            }
            for (let i = row - 2; i >= 1; i--) {
                ans.push(this.arr[i][0])
            }
        }
        return ans
    }

    /**
     * Transpose of matrix
     *  -- works for square matrix but for non square gives undefined
     *  [ 1, 5, 9, 13 ],[ 2, 6, 10, 14 ],[ 3, 7, 11, 15 ],[ undefined, undefined, undefined, undefined ]
     * @returns array
     */
    transpose = () => {
        let row = this.arr.length
        let col = this.arr[0].length;
        let len = Math.max(row, col)
        let val = 0
        while (val < len) {
            for (let i = val; i < len; i++) {
                let temp = this.arr[i][val];
                this.arr[i][val] = this.arr[val][i]
                this.arr[val][i] = temp;
            }
            val++
        }
        return this.arr
    }

    /**
     * rotate matrix anticlockwise by 90 degree
     */
    rotateMatrix90 = () => {
        this.arr = this.transpose();
        let n = this.arr.length
        for (let i = 0; i < n; i++) {
            let low = 0, high = n - 1;
            while (low < high) {
                let temp = this.arr[low][i];
                this.arr[low][i] = this.arr[high][i];
                this.arr[high][i] = temp
                low++
                high--
            }
        }
        return this.arr
    }

    /**
     * rotate matrix clockwise
     * @param {*} matrix 
     */
    rotate90 = () => {
        this.arr = this.transpose();
        let n = this.arr.length
        for (let i = 0; i < n; i++) {
            let low = 0, high = n - 1;
            while (low < high) {
                let temp = this.arr[i][low];
                this.arr[i][low] = this.arr[i][high];
                this.arr[i][high] = temp
                low++
                high--
            }
        }
        return this.arr
    }

    /**
     * Print spiral of matrix
     * Input -  :[[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]];
     * @returns [ 1,  2,  3,  4, 8, 12, 16, 15, 14, 13, 9,  5, 6,  7, 11, 10]
     */
    printSpiral = () => {
        let ans = []
        let row = this.arr.length
        let col = this.arr[0].length;
        let top = 0;
        let left = 0
        let bottom = row - 1;
        let right = col - 1
        while (top <= bottom && left <= right) {
            for (let i = left; i <= right; i++) {
                ans.push(this.arr[top][i])
            }
            top++;
            for (let i = top; i <= bottom; i++) {
                ans.push(this.arr[i][right])
            }
            right--;
            if (top <= bottom) {
                for (let i = right; i >= left; i--) {
                    ans.push(this.arr[bottom][i])
                }
                bottom--;
            }
            if (left <= right) {
                for (let i = bottom; i >= top; i--) {
                    ans.push(this.arr[i][left]);
                }
                left++
            }

        }
        return ans;
    }
}

let matrix = new matrixQues();
matrix.arr = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]];
// console.log(matrix.arr)
// console.log(matrix.printSnake())
// console.log(matrix.printBoundaries(), "print boundary")
// console.log(matrix.transpose(), "transpose")
// console.log(matrix.rotateMatrix90(), "rotate matrix anti-clockwise")
// console.log(matrix.rotate90(), "rotate matrix clockwise")
// console.log(matrix.printSpiral(), "spiral")
