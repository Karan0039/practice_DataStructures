//Max binary heap

class MaxHeap {
    constructor() {
        this.values = []
    }
    insert(val) {
        this.values.push(val)
        let index = this.values.length - 1
        let el = this.values[index]
        while (index >= 0) {
            let parentIndex = parseInt((index - 1) / 2)
            let parent = this.values[parentIndex]
            if (parent >= el) break
            this.values[parentIndex] = el
            this.values[index] = parent
            index = parentIndex
        }
        return this
    }
    extractMax() {
        let max = this.values[0]
        let end = this.values.pop()
        this.values[0] = end
        this.sinkDown()
        return max
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
                if (leftChild > element)
                    swap = leftChildIndex
            }
            if (rightChildIndex < length) {
                rightChild = this.values[rightChildIndex]
                if ((swap == null && rightChild > element) || (swap !== null && rightChild > leftChild))
                    swap = rightChildIndex
            }
            if (swap === null) break;
            this.values[index] = this.values[swap]
            this.values[swap] = element
            index = swap
        }

    }
}
let heap = new MaxHeap()
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);

console.log(heap)
console.log(heap.extractMax())
console.log(heap)