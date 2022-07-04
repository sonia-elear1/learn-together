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
    }
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
    levelOrderTraverse = () => {
        let queue = [this.root]
        let result = []
        while (queue.length != 0) {
            let subarr = []
            const n = queue.length
            for (let i = 0; i < n; i++) {
                let node = queue.pop()
                subarr.push(node.data)
                if (node.left) {
                    queue.unshift(node.left)
                }
                if (node.right) {
                    queue.unshift(node.right)
                }
            }
            result.push(subarr)
        }
        console.log(result)
    }
}


let tree = new BinaryTree();
tree.createBinaryTree(5);
tree.createBinaryTree(10);
tree.createBinaryTree(2);
tree.createBinaryTree(8);
tree.levelOrderTraverse()
