class newNode {
    constructor(data) {
        this.data = data;
        this.left = null
        this.right = null;
    }
}
class BinaryTree {
    constructor() {
        this.root = null
    };

    /**
     * Create Binary Tree
     * @param {*} data 
     * @returns 
     */
    createBinaryTree = (data) => {
        if (this.root === null) {
            this.root = new newNode(data);
            return this
        }
        let current = this.root;
        while (current) {
            if (data === current.data) return undefined;
            if (data < current.data) {
                if (current.left === null) {
                    current.left = new newNode(data);
                    return this;
                }
                current = current.left;
            } else {
                if (current.right === null) {
                    current.right = new newNode(data);
                    return this
                }
                current = current.right;
            }

        }
    };

    /**
     * INORDER TRAVERSAL (Left, root, right)
     * @param {*} node 
     * @returns 
     */
    printInorder = (node) => {

        if (node == null)
            return;

        /* first recur on left child */
        tree.printInorder(node.left);

        /* then print the data of node */
        console.log(node.data + " ");

        /* now recur on right child */
        tree.printInorder(node.right);
    };

    /**
     * post order traversal (left, right , root)
     * @param {*} node 
     * @returns 
     */
    printPostorder = (node) => {

        if (node == null)
            return;

        /* first recur on left child */
        tree.printPostorder(node.left);
        /* now recur on right child */
        tree.printPostorder(node.right);
        /* then print the data of node */
        console.log(node.data + " ");
    };

    /**
     * preorder traversal (root, left, right)
     * @param {*} node 
     * @returns 
     */
    printPreorder = (node) => {

        if (node == null)
            return;

        /* then print the data of node */
        console.log(node.data + " ");
        /* first recur on left child */
        tree.printPreorder(node.left);
        /* now recur on right child */
        tree.printPreorder(node.right);

    };

    /**
     * height of binary tree
     * @param {*} node 
     * @returns 
     */
    height = (node) => {
        if (node == null)
            return 0;
        else
            return Math.max(tree.height(node.left), tree.height(node.right)) + 1
    }

    /**
     * Print node present at k distance
     * @param {*} node 
     * @param {*} k distance- 
     * @returns 
     */
    printK = (node, k) => {
        let ans = []
        function traverse(node, k) {
            if (node != null) {
                if (k === 0) {
                    ans.push(node.data)
                }
                traverse(node.left, k - 1)
                traverse(node.right, k - 1)
            }
            return;
        }
        traverse(node, k)
        return ans
    }

    /**
     * LEVEL ORDER TRAVERSAL 
     * BFS
     * Time Complexity O(Hn)
     * @param {*} node 
     * @returns 
     */
    levelOrder = (node) => {
        let ans = [];
        let height = tree.height(node);
        let i = 0
        while (i < height) {
            ans.push(tree.printK(node, i));
            i++
        }
        return ans
    }

    /**
     * LEVEL ORDER TRAVERSAL using QUEUE DS
     * TIME COMPLEXITY: O(N)
     * @param {*} node 
     */
    levelOrderOptimize = (node) => {
        let ans = []
        let arr = []
        let result = []
        arr.push(node);
        arr.push(null)
        while (arr.length > 1) {
            let temp = arr.shift()
            if (temp === null) {
                result = result.concat([ans])
                ans = []
                arr.push(null)
            }
            else {
                ans.push(temp.data)
                if (temp.left !== null) {
                    arr.push(temp.left);
                }
                if (temp.right !== null) {
                    arr.push(temp.right);
                }
            }

        }
        result = result.concat([ans])
        return result
    }

    /**
     * Size of binary tree
     * @param {*} node 
     */
    sizeOfTree = (node) => {
        /**
         * 1st method
         */
        let count = 0
        function traverse(node) {
            if (node != null) {
                count++;
                traverse(node.left)
                traverse(node.right)
            }
            return;
        }
        traverse(node)
        return count
        /**
         * 2nd method
         */
        if (node === null) {
            return 0
        }
        else {
            return 1 + tree.sizeOfTree(node.left) + tree.sizeOfTree(node.right)
        }

    }

    maxOfBinaryTree = (node) => {
        let max = -Infinity
        if (node === null) {
            return max
        }
        else {
            // function traverse(node) {
            //     if(node!==null){
            //         max  = max > node.data ? max: node.data
            //         traverse(node.left);
            //         traverse(node.right);
            //     }

            // }
            // traverse(node)
             
            return Math.max(node.data, Math.max(tree.maxOfBinaryTree(node.left), tree.maxOfBinaryTree(node.right)))
        }
        // return max

    }
}


let tree = new BinaryTree();
tree.createBinaryTree(5);
tree.createBinaryTree(10);
tree.createBinaryTree(2);
tree.createBinaryTree(8);
tree.createBinaryTree(7);
tree.createBinaryTree(4);
tree.createBinaryTree(11);
tree.printInorder(tree.root);
tree.printPostorder(tree.root);
tree.printPreorder(tree.root);
console.log(tree.height(tree.root))
console.log(tree.printK(tree.root, 2))
console.log(tree.levelOrderOptimize(tree.root))
console.log(tree.sizeOfTree(tree.root), "size of bt")
console.log(tree.maxOfBinaryTree(tree.root), "max of bt")