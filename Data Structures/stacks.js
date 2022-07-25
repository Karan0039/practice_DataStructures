class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}
class Stack {
    constructor() {
        this.first = null
        this.last = null
        this.size = 0
    }
    add(val) {
        let newNode = new Node(val)
        if (!this.first) {
            this.first = newNode
            this.last = this.first
        } else {
            newNode.next = this.first
            this.first = newNode
        }
        return ++this.size
    }
    remove() {
        if (!this.first) return null
        let removedNode = this.first
        if (this.length == 1) {
            this.first = null
            this.last = null
        } else {
            this.first = this.first.next
        }
        removedNode.next = null
        this.size--
            return removedNode
    }
}

let stack = new Stack()
stack.add(5).add(10).add(15)
console.log(stack.remove())
console.log(stack)