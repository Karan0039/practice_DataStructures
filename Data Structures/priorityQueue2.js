//using minHeap
class Node {
    constructor(val, priority) {
        this.val = val
        this.priority = priority
    }
}
class PriorityQueue {
    constructor() {
        this.values = []
    }
    enqueue(val, priority) {
        let newNode = new Node(val, priority)
        this.values.push(newNode)
        this.bubbleUp()
    }
    bubbleUp() {
        let index = this.values.length - 1
        let element = this.values[index]
        while (index >= 0) {
            let parentIndex = parseInt((index - 1) / 2)
            let parent = this.values[parentIndex]
            if (parent.priority <= element.priority) break
            this.values[index] = parent
            this.values[parentIndex] = element
            index = parentIndex
        }
    }
    dequeue() {
        let index = 0
        let first = this.values[0]
        this.values[0] = this.values.pop()
        this.sinkDown()
        return first
    }
    sinkDown() {
        let index = 0
        let length = this.values.length
        let element = this.values[0]
        while (true) {
            let leftChildIndex = 2 * index + 1
            let rightChildIndex = 2 * index + 2
            let leftChild, rightChild
            let swap = null
            if (leftChildIndex < length) {
                leftChild = this.values[leftChildIndex]
                if (leftChild.priority < element.priority)
                    swap = leftChildIndex
            }
            if (rightChildIndex < length) {
                rightChild = this.values[rightChildIndex]
                if ((swap == null && rightChild.priority < element.priority) ||
                    (swap != null && rightChild.priority < leftChild.priority)) {
                    swap = rightChildIndex
                }
            }
            if (swap == null) break;
            this.values[index] = this.values[swap]
            this.values[swap] = element
            index = swap
        }
    }
}


let er = new PriorityQueue()
er.enqueue("Common Cold", 5)
er.enqueue("Heart Attack", 1)
er.enqueue("High Fever", 3)
er.enqueue("Major Accident", 2)
er.enqueue("Minor Accident", 4)

console.log(er)
console.log(er.dequeue())
console.log(er.dequeue())
console.log(er.dequeue())
console.log(er.dequeue())
console.log(er)