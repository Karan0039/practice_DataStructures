class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}
class BinarySearchTree {
    constructor() {
            this.root = null
        }
        // insert(val) {
        //     let newNode = new Node(val)
        //     let prev
        //     if (!this.root) {
        //         this.root = newNode
        //     } else {
        //         let curr = this.root
        //         while (curr) {
        //             if (val == curr.val) return undefined
        //             prev = curr
        //             if (val < curr.val) curr = curr.left
        //             else curr = curr.right
        //         }
        //         if (val < prev.val) prev.left = newNode
        //         else prev.right = newNode
        //     }
        //     return this
        // }
    insert(val) {
        let newNode = new Node(val)
        if (!this.root) {
            this.root = newNode
        } else {
            let curr = this.root
            while (true) {
                if (val == curr.val) return undefined
                if (val < curr.val) {
                    if (!curr.left) {
                        curr.left = newNode
                        return this;
                    }
                    curr = curr.left
                } else {
                    if (!curr.right) {
                        curr.right = newNode
                        return this;
                    }
                    curr = curr.right
                }
            }
        }
        return this
    }
    find(val) {
        if (!this.root) return false
        let curr = this.root
        while (curr) {
            if (val == curr.val) return true
            if (val < curr.val) curr = curr.left
            else curr = curr.right
        }
        return false
    }
}

let tree = new BinarySearchTree()
tree.insert(12).insert(5).insert(13).insert(18).insert(4).insert(10)
console.log(tree.find(16))
console.log(tree)