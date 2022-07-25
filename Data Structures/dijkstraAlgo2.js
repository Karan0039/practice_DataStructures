class PriorityQueue {
    constructor() {
        this.values = []
    }
    enqueue(val, priority) {
        this.values.push({ val: val, priority })
        this.bubbleUp()
    }
    bubbleUp() {
        let index = this.values.length - 1
        let element = this.values[index]
        while (true) {
            let parentIndex = parseInt((index - 1) / 2)
            let parent = this.values[parentIndex]
            if (parent.priority <= element.priority) break;
            this.values[parentIndex] = element
            this.values[index] = parent
            index = parentIndex
        }
    }
    dequeue() {
        let min = this.values[0]
        this.values[0] = this.values.pop()
        this.sinkDown()
        return min
    }
    sinkDown() {
        let index = 0
        let element = this.values[0]
        let length = this.values.length
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
                    (swap != null && rightChild.priority < leftChild.priority))
                    swap = rightChildIndex
            }
            if (swap == null) break
            this.values[index] = this.values[swap]
            this.values[swap] = element
            index = swap
        }
    }
}

class WeightedGraph {
    constructor() {
        this.adjacencyList = {}
    }
    addVertex(v) {
        if (!this.adjacencyList[v]) this.adjacencyList[v] = []
    }
    addEdge(v1, v2, weight) {
        this.adjacencyList[v1].push({ node: v2, weight })
        this.adjacencyList[v2].push({ node: v1, weight })
    }
    Dijkstra(start, finish) {
        let nodes = new PriorityQueue()
        let distances = {}
        let previous = {}
        let smallest
        let path = []
        for (let i in this.adjacencyList) {
            if (i == start) {
                distances[i] = 0
                nodes.enqueue(i, 0)
            } else {
                distances[i] = Infinity
                nodes.enqueue(i, Infinity)
            }
            previous[i] = null
        }
        while (nodes.values.length) {
            smallest = nodes.dequeue().val
            if (smallest == finish) {
                while (previous[smallest]) {
                    path.push(smallest)
                    smallest = previous[smallest]
                }
                break;
            }
            if (smallest || distances[smallest] != Infinity) {
                for (let neighbor in this.adjacencyList[smallest]) {
                    let nextNode = this.adjacencyList[smallest][neighbor]
                    let candidate = nextNode.weight + distances[smallest]
                    let nextNeighbor = nextNode.node
                    if (candidate < distances[nextNeighbor]) {
                        distances[nextNeighbor] = candidate
                        previous[nextNeighbor] = smallest
                        nodes.enqueue(nextNeighbor, candidate)
                    }
                }
            }
        }
        return path.concat(smallest).reverse()
    }
}

var graph = new WeightedGraph()
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);



console.log(graph.Dijkstra("A", "E"));