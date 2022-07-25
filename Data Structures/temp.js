// class Student {
//     constructor(name, age, marks) {
//         this.name = name
//         this.age = age
//         this.marks = marks
//     }
//     addMarks(value) {
//         this.marks += value
//     }
// }
// let student1 = new Student("Karan", 29, 50)
// let student2 = new Student("sdad", 32, 12)
// student1.addMarks(20)
// console.log(student1)
// console.log(student2)

// let map ={}
// let map = new Map() // map.has, map.set, map.get, map.size
// let arr = new Array()
// let set = new Set()



class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}
class SinglyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }
    push(val) {
        let newNode = new Node(val)
        if (!this.head) {
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
        let curr = this.head
        let prev
        while (curr.next) {
            prev = curr
            curr = curr.next
        }
        prev.next = null
        this.tail = prev
        this.length--
            return curr
    }
}
let list = new SinglyLinkedList()
list.push(5).push(10).push(15)
console.log(list.pop())
console.log(list)