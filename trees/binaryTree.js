class newNode {
    constructor(data) {
        this.data = data;
        this.left = null
        this.right = null;
    }
}

class CreateNode {
    constructor(data) {
        this.data = data;
        this.next = null
        this.previous = null
    }
}
class BinaryTree {
    constructor() {
        this.root = null
        this.head = null
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
        this.printInorder(node.left);

        /* then print the data of node */
        console.log(node.data + " ");

        /* now recur on right child */
        this.printInorder(node.right);
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
        this.printPostorder(node.left);
        /* now recur on right child */
        this.printPostorder(node.right);
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
        this.printPreorder(node.left);
        /* now recur on right child */
        this.printPreorder(node.right);

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
            return Math.max(this.height(node.left), this.height(node.right)) + 1
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
        let height = this.height(node);
        let i = 0
        while (i < height) {
            ans.push(this.printK(node, i));
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
            return 1 + this.sizeOfTree(node.left) + this.sizeOfTree(node.right)
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

            return Math.max(node.data, Math.max(this.maxOfBinaryTree(node.left), this.maxOfBinaryTree(node.right)))
        }
        // return max

    }

    /**
     * left view iterative method
     * @param {*} node 
     * @returns 
     */
    leftRightViewTree = (node) => {
        let leftans = []
        let rightans = []
        let result = {
            "leftView": [],
            "rightView": []
        }
        let arr = [];
        if (node === null) {
            return
        }
        arr.push(node)
        while (arr.length > 0) {
            let count = arr.length;
            for (let i = 0; i < count; i++) {
                // get first element in queue
                let temp = arr.shift();

                // for right view
                if (i == count - 1) {
                    rightans.push(temp.data)
                }
                // for left view
                if (i == 0) {
                    leftans.push(temp.data)
                }
                if (temp.left != null) {
                    arr.push(temp.left)
                }
                if (temp.right != null) {
                    arr.push(temp.right)
                }
            }
            result.leftView = result.leftView.concat([leftans])
            result.rightView = result.rightView.concat([rightans])
            leftans = []
            rightans = []
        }
        return result
    }

    /**
     * left view recursive
     * @param {*} root 
     * @returns 
     */
    leftView = (root) => {
        //your code here
        let maxLevel = 0;
        let ans = []
        function traverse(node, level) {
            if (node === null) {
                return
            }
            if (maxLevel < level) {
                ans.push(node.data)
                maxLevel = level
            }
            traverse(node.left, level + 1);
            traverse(node.right, level + 1)
        }
        traverse(root, 1)
        return ans
    }

    /**
     * TOP AND BOTTOM VIEW OF BINARY TREE
     * @param {*} node 
     * @returns 
     */
    topBottomView = (node) => {
        let arr = [];
        let result = {
            "topView": [],
            "bottomView": []
        }
        let topmap = new Map()
        let bottommap = new Map()
        if (node === null) {
            return
        }
        // hd is horizal distance from parent element
        arr.push({ node: node, hd: 0 })
        while (arr.length > 0) {
            let count = arr.length;
            for (let i = 0; i < count; i++) {
                let temp = arr.shift();
                // check if key not exist for top view
                if (!topmap.has(temp.hd)) {
                    topmap.set(temp.hd, temp.node.data)
                }

                // for bottom view
                bottommap.set(temp.hd, temp.node.data)
                // push elements in queue with horizontal distance
                if (temp.node.left != null) {
                    arr.push({ node: temp.node.left, hd: temp.hd - 1 })
                }
                if (temp.node.right != null) {
                    arr.push({ node: temp.node.right, hd: temp.hd + 1 })
                }
            }
        }

        // get the value of keys of topview
        topmap.forEach((data) => {
            result.topView.push(data)
        })
        // get the value of keys of bottom view
        bottommap.forEach((data) => {
            result.bottomView.push(data)
        })
        return result
    }

    /**
     * Validate if sum of chil is equal to parent in whole bt
     * @param {*} node 
     * @returns 
     */
    childSumProperty = (node) => {
        let result = true
        let sum = 0
        function traverse(node) {
            if (node === null) return true;
            if (node.left === null && node.right === null) return true

            if (node.left != null) {
                sum += node.left.data
            }

            if (node.right != null) {
                sum += node.right.data
            }

            console.log(node.data, node.left.data, node.right, "value")
            if (node.data !== sum) {
                result = false;
                return result
            }
            sum = 0
            traverse(node.left);
            traverse(node.right);
        }
        traverse(node)
        return result
    }

    /**
     * check if tree if balanced for left and right side  means diffrence is not
     * greater than 1
     * Time Complexity  - O(N^2)
     * @param {*} node 
     * @returns 
     */
    balancedTree = (node) => {
        if (node == null) { return true; }
        else {
            let left = this.height(node.left);
            let right = this.height(node.right);
            if (Math.abs(left - right) > 1) {
                return false
            }
            this.balancedTree(node.left)
            this.balancedTree(node.right)
        }
        return true
    }

    /** BALANCED TREE  
     * TIME COMPLEXITY - O(N)
     */
    balancedTreeOptimize = (node) => {
        if (node === null) return 0

        let lh = this.balancedTreeOptimize(node.left)
        if (lh === -1) return -1

        let rh = this.balancedTreeOptimize(node.right)
        if (rh === -1) return -1

        if (Math.abs(lh - rh) > 1) {
            return -1
        }
        else {
            return Math.max(lh, rh) + 1
        }
    }

    /**
     * Maximum width of binary tree 
     * implies maximum node at level 
     * @param {*} node 
     * @returns 
     */
    widthBT = (node) => {
        let ans = 0
        let max = -Infinity
        let queue = []
        queue.push(node)
        while (queue.length > 0) {
            let count = queue.length;
            for (let i = 0; i < count; i++) {
                let temp = queue.shift();
                ans++;
                if (temp.left !== null)
                    queue.push(temp.left);
                if (temp.right != null)
                    queue.push(temp.right)
            }
            max = max > ans ? max : ans
            ans = 0
        }
        return max
    }

    /**
     * total nodes in binary tree
     * @param {*} node 
     */
    totalNodes = (node) => {
        let ans = 0;
        let queue = []
        queue.push(node);
        while (queue.length > 0) {
            let count = queue.length;
            for (let i = 0; i < count; i++) {
                let temp = queue.shift();
                ans++;
                if (temp.left !== null)
                    queue.push(temp.left);
                if (temp.right !== null)
                    queue.push(temp.right)
            }
        }
        return ans
    }

    /**
     * convert binary tree into doubly linked list
     * @param {*} node 
     */
    convertBTtoDLL = (node) => {
        let prev = null
        function traverse(node) {
            if (node === null) return node;
            /* first recur on left child */
            let head = traverse(node.left);
            /* then print the data of node */
            if (prev === null) {
                head = node
            }
            else {

                node.left = prev
                prev.right = node
            }
            prev = node
            /* now recur on right child */
            traverse(node.right);
            //    ans = head
            return head
        }
        let ans = traverse(node);
        return ans
    }

    createTreefromInPre = (ino, pre) => {
        let is = 0;
        let ie = ino.length - 1
        let map = new Map()
        for (let i = is; i <= ie; i++) {
            map.set(ino[i], i)
        }
        let preIndex = 0;
        let head;
        function create(ino, pre, is, ie) {
            let inIndex;
            if (is > ie) return null;
            let root = new newNode(pre[preIndex]);
            // console.log(root)
            preIndex++;
            // for(let i = is;i<= ie; i++) {
            //     if(ino[i] === root.data){
            //         inIndex = i;
            //         break
            //     }
            // }
            inIndex = map.get(root.data)
            root.left = create(ino, pre, is, inIndex - 1)
            root.right = create(ino, pre, inIndex + 1, ie)
            return root;
        }
        head = create(ino, pre, is, ie)
        return head
    }


    /**
     * Create tree from inorder and postorder
     * @param {*} ino 
     * @param {*} post 
     * @returns 
     */
    createTreefromInPost = (ino, post) => {
        let is = 0;
        let ie = ino.length - 1
        let map = new Map()
        for (let i = is; i <= ie; i++) {
            map.set(ino[i], i)
        }
        let postIndex = ino.length - 1;
        // let head;
        function create(ino, post, is, ie) {
            let inIndex;
            if (is > ie) return null;
            console.log(post[postIndex])
            let root = new newNode(post[postIndex]);
            postIndex--;
            inIndex = map.get(root.data)
            // if (is == ie) {
            //     return root;
            //   }
            root.right = create(ino, post, inIndex + 1, ie)
            root.left = create(ino, post, is, inIndex - 1)

            return root;
        }
        this.root = create(ino, post, is, ie)
        return this.root
    }

    traverseSpiral = (node) => {
        let arr = []
        let result = []
        let reverse = false;
        arr.push(node);
        let stack = []
        while (arr.length > 0) {
            let count = arr.length;
            for (let i = 0; i < count; i++) {
                let temp = arr.shift();
                if (reverse) {
                    stack.push(temp.data)
                }
                else {
                    result.push(temp.data)
                }
                if (temp.left != null) {
                    arr.push(temp.left)
                }
                if (temp.right != null) {
                    arr.push(temp.right)
                }
            }
            if (reverse) {
                while (stack.length > 0) {
                    let el = stack.pop();
                    result.push(el);
                }
            }
            reverse = !reverse
        }
        return result
    }

    /**
     * Traverse tree in spiral using two stacks
     * @param {*} node 
     */
    traverseSpiralOptimize = (node) => {
        let ans = [];
        let stack1 = [];
        let stack2 = [];
        let result = [];
        stack1.push(node);
        while (stack1.length > 0 || stack2.length > 0) {
            while (stack1.length > 0) {
                let temp = stack1.pop();
                ans.push(temp.data);
                if (temp.right !== null)
                    stack2.push(temp.right);
                if (temp.left !== null)
                    stack2.push(temp.left)
            }
            result = result.concat([ans])
            ans =[]
            while (stack2.length > 0) {
                let temp = stack2.shift();
                ans.push(temp.data);
                if (temp.right !== null)
                    stack1.push(temp.right)
                if (temp.left !== null)
                    stack1.push(temp.left);
            }
            result = result.concat([ans])
            ans =[]
        }
        return result
    }

    /**
     * Diameter of a Binary Tree
     * @param {*} node  
     * Time Complexity O(N^2)
     * @returns maximum length between left and right in tree/subtree
     */
    diameterOfBTBasic = (node) => {
        if(node=== null) return 0;
        let height =  1+ this.height(node.left) + this.height(node.right);
        let lh = this.diameterOfBTBasic(node.left);
        let rh = this.diameterOfBTBasic(node.right);
        return Math.max(height, Math.max(lh,rh))
    }

    /**
     * Diameter of binary tree optimized
     * @param {*} node
     * Time Complexity O(N) 
     * @returns 
     */
    diameterOfBTEfficient = (node) => {
        let diameterOfBT = 0
        function traverse(node){
            if(node === null) return 0;
            let lh = traverse(node.left);
            let rh = traverse(node.right);
            diameterOfBT = Math.max(diameterOfBT, 1+lh+rh);
            return 1+Math.max(lh,rh)
        }
        traverse(node);
        return diameterOfBT;
     }

     /**
      * Lowerst common ancestor
      * The lowest common ancestor is defined between two nodes p 
      * and q as the lowest node in T that has both p and q as descendants
      * Application: to find disctance between two nodes
      */
     lowestCommonAncestor = (node) => {
        
     }
}


// let tree = new BinaryTree();
// tree.createBinaryTree(5);
// tree.createBinaryTree(10);
// tree.createBinaryTree(2);
// tree.createBinaryTree(8);
// tree.createBinaryTree(7);
// tree.createBinaryTree(4);
// tree.createBinaryTree(11);
// console.log(JSON.stringify(tree.root))
// tree.printInorder(tree.root);
// tree.printPostorder(tree.root);
// tree.printPreorder(tree.root);
// console.log(tree.height(tree.root))
// console.log(tree.printK(tree.root, 2))
// console.log(tree.levelOrderOptimize(tree.root), "level order traversal")
// console.log(tree.sizeOfTree(tree.root), "size of bt")
// console.log(tree.maxOfBinaryTree(tree.root), "max of bt");
// console.log(tree.leftRightViewTree(tree.root), "left and right view of bt")
// console.log(tree.leftView(tree.root), "left view of bt using recursion")
// console.log(tree.topBottomView(tree.root), "top View of bt")
// console.log(tree1.childSumProperty(tree.root), "child sum property of bt")
// console.log(tree.balancedTree(tree.root), "isBalanced 0.0")
// console.log(tree.balancedTreeOptimize(tree.root), "isBalanced 0.1")
// console.log(tree.widthBT(tree.root), "width of binary tree")
// console.log(tree.totalNodes(tree.root), "total nodes in binary tree")
// console.log(tree.convertBTtoDLL(tree.root), "convertBTtoDLL")

let tree1 = new BinaryTree();
tree1.createBinaryTree(5);
tree1.createBinaryTree(10);
tree1.createBinaryTree(3);
tree1.createBinaryTree(1);
tree1.createBinaryTree(2);
tree1.createBinaryTree(4);

// console.log(tree1.balancedTree(tree1.root), "isBalanced 1.0")
// console.log(tree1.balancedTreeOptimize(tree1.root), "isBalanced 1.1")

let tree2 = new BinaryTree();
console.log(tree2.createTreefromInPre([ 'D', 'B', 'E' ,'A' ,'F' ,'C' ], ['A','B', 'D', 'E', 'C', 'F']), "createtree ")
let tree3 = new BinaryTree();
console.log(tree3.createTreefromInPost([4, 8, 2, 5, 1, 6, 3, 7], [8, 4, 5, 2, 6, 7, 3, 1]), "createtree postorder")
console.log(tree3.root)
// console.log(tree3.traverseSpiral(tree3.root), "spiral")
// console.log(tree3.traverseSpiralOptimize(tree3.root), "spiral traverse optimize")
console.log(tree1.diameterOfBTBasic(tree1.root), "diameter of bt using naive")
console.log(tree1.diameterOfBTEfficient(tree1.root), "diameter of bt using efficient")