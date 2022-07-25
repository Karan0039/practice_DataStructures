class Node {
    constructor(val) {
        this.val = val
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null
        this.tail = null;
        this.length = 0
    }
    push(val) {
        var node = new Node(val);
        if (this.head === null) {
            this.head = node;
            this.tail = this.head;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.length++;
        return this;
    }
    shift() {
        if (!this.head) return undefined
        let shiftedNode = this.head
        if (this.length == 1) {
            this.head = null
            this.tail = null
        } else {
            this.head = shiftedNode.next
            this.head.prev = null
            shiftedNode.next = null
        }
        this.length--
            return shiftedNode
    }
    pop() {
        if (!this.head) return undefined
        let poppedNode = this.tail
        if (this.length == 1) {
            this.head = null
            this.tail = null
        } else {
            this.tail = poppedNode.prev
            this.tail.prev = null
            poppedNode.prev = null
        }
        this.length--
            return poppedNode
    }
    get(index) {
        if (index < 0 || index >= this.length) return undefined
        let count, curr
        if (index <= this.length / 2) {
            count = 0
            curr = this.head
            while (count != index) {
                curr = curr.next
                count++
            }
        } else {
            count = this.length - 1
            curr = this.tail
            while (count != index) {
                curr = curr.prev
                count--
            }
        }
        return curr
    }
    remove(index) {
        if (index < 0 || index >= this.length) return undefined
        if (index == 0) return this.shift()
        if (index == this.length - 1) return this.pop()
        let getNode = this.get(index)
        if (getNode) {
            let prevNode = getNode.prev
            let nextNode = getNode.next
            prevNode.next = nextNode
            nextNode.prev = prevNode
            getNode.next = null
            getNode.prev = null
            this.length--
                return getNode
        }
        return undefined
    }
    reverse() {
        let node = this.head
        this.head = this.tail
        this.tail = node
        let next
        let prev = null
        while (node) {
            next = node.next
            node.next = prev
            prev = node
            prev.prev = null
            node = next
        }
        return this
    }
}
let list = new DoublyLinkedList
list.push(5).push(10).push(15).push(20)
console.log(list)
console.log(list.reverse())