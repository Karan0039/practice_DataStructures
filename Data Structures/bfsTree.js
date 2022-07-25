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
            let curr = this.root
            while (true) {
                if (val == curr.val) return this
                if (val < curr.val) {
                    if (!curr.left) {
                        curr.left = newNode
                        return this
                    }
                    curr = curr.left
                } else {
                    if (!curr.right) {
                        curr.right = newNode
                        return this
                    }
                    curr = curr.right
                }
            }
        }
        return this
    }
    BFS() {
        let curr = this.root
        let data = []
        let queue = []
        queue.push(curr)
        while (queue.length) {
            curr = queue.shift()
            data.push(curr.val)
            if (curr.left) queue.push(curr.left)
            if (curr.right) queue.push(curr.right)
        }
        return data
    }
}


let tree = new BinaryTree()
tree.insert(5).insert(6).insert(4).insert(7).insert(5).insert(3).insert(1).insert(8).insert(12).insert(10)
console.log(tree.BFS())