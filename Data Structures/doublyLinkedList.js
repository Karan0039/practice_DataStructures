class Node {
    constructor(val) {
        this.val = val
        this.next = null
        this.prev = null
    }
}
class doublyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }
    push(val) {
        let newNode = new Node(val)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }
        this.length++
            return this
    }
    pop() {
        if (!this.head) return undefined
        let poppedNode = this.tail
        if (this.length == 1) {
            this.head = null
            this.tail = null
        } else {
            this.tail = poppedNode.prev
            this.tail.next = null
            poppedNode.prev = null
        }
        this.length--
            return poppedNode.val
    }
    shift() {
        if (!this.head) return undefined
        let oldHead = this.head
        if (this.length == 1) {
            this.head = null
            this.tail = null
        } else {
            this.head = oldHead.next
            this.head.prev = null
            oldHead.next = null
        }
        this.length--
            return oldHead
    }
    unshift(val) {
        let newNode = new Node(val)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.head.prev = newNode
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
            return this
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
    set(index, val) {
        let getNode = this.get(index)
        if (getNode) {
            getNode.val = val
            return true
        }
        return false
    }
    insert(index, val) {
        if (index == 0) return this.unshift(val)
        if (index == this.length) return this.push(val)
        let newNode = new Node(val)
        let getNode = this.get(index)
        if (getNode) {
            let prev = getNode.prev
            prev.next = newNode
            newNode.prev = prev
            getNode.prev = newNode
            newNode.next = getNode
            this.length++
                return true
        }
        return false
    }
    remove(index) {
        if (index == 0) return this.shift()
        if (index == this.length) return this.pop()
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
    print() {
        let currH = this.head
        let currT = this.tail
        let arr = []
        while (currH) {
            arr.push(currH.val)
            currH = currH.next
        }
        while (currT) {
            arr.push(currT.val)
            currT = currT.prev
        }
        return arr
    }
}

let list = new doublyLinkedList()
list.push(2)
list.push(4)
list.push(6)
list.push(8)
    // console.log(list.tail)
    // console.log(list.pop())
    // console.log(list.shift())
    // list.unshift(100)
    // console.log(list.get(5))
    // list.set(1, 200)
    // console.log(list.print())
    // list.insert(3, 50)
console.log(list.print())
list.remove(0)
console.log(list.print())
console.log(list)