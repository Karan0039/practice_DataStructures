class Node {
    constructor(value) {
        this.val = value
        this.next = null
    }
}
class SinglyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }
    push(value) {
        let newNode = new Node(value)
        if (this.head == null) {
            this.head = newNode
            this.tail = this.head
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
            return this
    }
    pop() {
        if (this.head == null) return undefined
        let curr = this.head
        let prev
        while (curr.next != null) {
            prev = curr
            curr = curr.next
        }
        this.tail = prev
        this.tail.next = null
        this.length--
            if (this.length == 0) {
                this.head = null
                this.tail = null
            }
        return curr.val
    }
    shift() {
        if (this.head == null) return undefined
        let shifted = this.head.val
        this.head = this.head.next
        this.length--
            if (this.length == 0) this.tail = null
        return shifted
    }
    unshift(value) {
        let newNode = new Node(value)
        if (this.head == null) {
            this.head = newNode
            this.tail = this.head
        } else {
            let current = this.head
            this.head = newNode
            this.head.next = current
        }
        this.length++
            return this.length
    }
    get(index) {
        if (index < 0 || index >= this.length) return null //or undefined or "No element present"
        let curr = this.head
        while (index > 0) {
            curr = curr.next
            index--
        }
        return curr
    }
    set(index, value) {
        let foundNode = this.get(index)
        if (foundNode != null) {
            foundNode.val = value
            return true
        }
        return false
    }
    insert(index, value) {
        if (index < 0 || index > this.length) return false
        if (index == 0) return !!this.unshift(value)
        if (index == this.length) return !!this.push(value)
        let newNode = new Node(value)
        let prevNode = this.get(index - 1)
        newNode.next = prevNode.next
        prevNode.next = newNode
        this.length++
            return true
    }
    remove(index) {
        if (index < 0 || index >= this.length) return undefined
        if (index == 0) return this.shift()
        if (index == this.length - 1) return this.pop()
        let foundNode = this.get(index - 1)
        let removed = foundNode.next
        foundNode.next = removed.next
        this.length--
            return removed.val
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
            node = next
        }
        return this
    }
    print() {
        let arr = []
        let curr = this.head
        while (curr.next) {
            arr.push(curr.val)
            curr = curr.next
        }
        arr.push(curr.val)
        return arr
    }
}
let list = new SinglyLinkedList()
list.push(12)
list.push(20)
list.push(34)
list.push(56)
    // console.log(list.pop())
    // console.log(list.shift())
    // console.log(list.unshift(100))
    // console.log(list.get(1))
    // console.log(list.set(1, 500))
    // console.log(list.get(1))
    // console.log(list.length)
    // console.log(list.insert(0, 250))
    // console.log(list)
    // console.log(list.remove(1))
console.log(list.print())
list.reverse()
console.log(list.print())
console.log(list)