function isSafe(grid, row, col, visited, ROW, COL) {
    return (row >= 0) && (row < ROW) && (col >= 0) && (col < COL)
        && (grid[row][col] == 1 && !visited[row][col]);
}

function DFS(grid, row, col, visited, ROW, COL) {
    let rowNbr = [-1, 0, 0, 1];
    let colNbr =  [0, -1, 1, 0];

    visited[row][col] = true;
    console.log(visited, "row, col")
    for (let k = 0; k < 4; ++k) {
        if (isSafe(grid, row + rowNbr[k], col + colNbr[k], visited, ROW, COL)) {
            DFS(grid, row + rowNbr[k], col + colNbr[k], visited, ROW, COL);
        }
    }

}

function BFS(mat, vis, si, sj)
{
 
    // These arrays are used to get row and
    // column numbers of 8 neighbours of
    // a given cell
    let row = [-1, 0, 0, 1];
    let col = [0, -1, 1, 0];
  
    // Simple BFS first step, we enqueue
    // source and mark it as visited
    let q = [];
    q.push([si, sj]);
    vis[si][sj] = true;
    console.log(vis)
    // Next step of BFS. We take out
    // items one by one from queue and
    // enqueue their univisited adjacent
    while (q.length != 0)
    {
  
        let i = q[0][0];
        let j = q[0][1];
        q.shift();
  
        // Go through all 8 adjacent
        for (let k = 0; k < 4; k++)
        {
            if (isSafe(mat, i + row[k],
                    j + col[k], vis))
            {
                vis[i + row[k]][j + col[k]] = true;
                q.push([i + row[k], j + col[k]]);
            }
        }
    }
}
 
function countBeautifulHouses(grid, row, col) {
    let visited = new Array(row);
    for (let i = 0; i < row; i++) {
        visited[i] = new Array(col);
    }
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            visited[i][j] = false;
        }
    }
    let ans = 0;
    for (let i = 0; i < row; ++i) {
        for (let j = 0; j < col; ++j) {
            if (grid[i][j] == 1 && !visited[i][j]) {
                DFS(grid, i, j, visited, row, col);
                // BFS(grid, visited, i, j)
                ans++;
            }
        }
    }
    return ans;
}

function main() {
    let d = ['4 4', '0 1 0 0', '1 1 0 0', '1 0 0 0', '1 0 0 0'];
    let d_0 = d[0].split(' ');
    let n = +(d_0[0]);
    let m = +(d_0[1]);
    let grid = [];
    for (let i = 1; i <= n; i++) {
        grid.push(d[i].split(' ').map(e => +e));
    }
    console.log(countBeautifulHouses(grid, n, m));
}

main()