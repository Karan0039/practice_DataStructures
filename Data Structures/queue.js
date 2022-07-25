class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}
class Queue {
    constructor() {
        this.first = null
        this.last = null
        this.size = 0
    }
    enqueue(val) {
        let newNode = new Node(val)
        if (!this.first) {
            this.first = newNode
            this.last = newNode
        } else {
            this.last.next = newNode
            this.last = newNode
        }
        return ++this.size
    }
    dequeue() {
        if (!this.first) return null
        let removedNode = this.first
        if (this.size == 1) {
            this.first = null
            this.last = null
        } else {
            this.first = this.first.next
        }
        this.size--
            removedNode.next = null
        return removedNode.val
    }
}

let queue = new Queue()
queue.enqueue(5).enqueue(10).enqueue(15)
console.log(queue.dequeue())
console.log(queue)