class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}
class BinaryTree {
    constructor() {
        this.root = null
    }
    insert(val) {
        let newNode = new Node(val)
        if (!this.root) {
            this.root = newNode
        } else {
            let node = this.root
            while (true) {
                if (val == node.val) return this
                if (val < node.val) {
                    if (!node.left) {
                        node.left = newNode
                        return this
                    }
                    node = node.left
                } else {
                    if (!node.right) {
                        node.right = newNode
                        return this
                    }
                    node = node.right
                }
            }
        }
        return this
    }
    BFS() {
        let node = this.root
        let data = []
        let queue = []
        queue.push(node)
        while (queue.length) {
            node = queue.shift()
            data.push(node.val)
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
        return data
    }
    DFSPreOrder() {
        let node = this.root
        let data = []
        let func = (node) => {
            if (!node) return
            data.push(node.val)
            func(node.left)
            func(node.right)
        }
        func(node)
        return data
    }
    DFSPostOrder() {
        let node = this.root
        let data = []
        let func = (node) => {
            if (!node) return
            func(node.left)
            func(node.right)
            data.push(node.val)
        }
        func(node)
        return data
    }
    DFSInOrder() {
        let node = this.root
        let data = []
        let func = (node) => {
            if (!node) return
            func(node.left)
            data.push(node.val)
            func(node.right)
        }
        func(node)
        return data
    }
}


let tree = new BinaryTree()
tree.insert(10).insert(12).insert(5).insert(8).insert(22).insert(2).insert(1).insert(3)
console.log(tree)
console.log(tree.BFS())
console.log(tree.DFSPreOrder())
console.log(tree.DFSPostOrder())
console.log(tree.DFSInOrder())
    //          10
    //     5            12
    //   2    8            22
    // 1  3