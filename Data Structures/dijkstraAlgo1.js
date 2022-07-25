//naive

class PriorityQueue {
    constructor() {
        this.values = []
    }
    enqueue(val, priority) {
        this.values.push({ val: val, priority })
        this.values.sort((a, b) => a.priority - b.priority)
    }
    dequeue() {
        return this.values.shift()
    }
}

class WeightedGraph {
    constructor() {
        this.adjacencyList = {}
    }
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
    }
    addEdge(v1, v2, weight) {
        this.adjacencyList[v1].push({ node: v2, weight })
        this.adjacencyList[v2].push({ node: v1, weight })
    }
    Dijkstra(start, finish) {
        let node = new PriorityQueue()
        let distances = {}
        let prev = {}
        let path = []
        let smallest
        for (let vertex in this.adjacencyList) {
            if (vertex == start) {
                distances[vertex] = 0
                node.enqueue(vertex, 0)
            } else {
                distances[vertex] = Infinity
                node.enqueue(vertex, Infinity)
            }
            prev[vertex] = null
        }
        while (node.values.length) {
            smallest = node.dequeue().val
            if (smallest == finish) {
                while (prev[smallest]) {
                    path.push(smallest);
                    smallest = prev[smallest];
                }
                break;
            }
            if (smallest || distances[smallest] != Infinity) {
                for (let neighbor in this.adjacencyList[smallest]) {
                    let nextNode = this.adjacencyList[smallest][neighbor]
                    let candidate = distances[smallest] + nextNode.weight
                    let nextNeighbor = nextNode.node
                    if (candidate < distances[nextNeighbor]) {
                        distances[nextNeighbor] = candidate;
                        prev[nextNeighbor] = smallest;
                        node.enqueue(nextNeighbor, candidate);
                    }
                }
            }
        }
        return path.concat(smallest).reverse();
    }
    totalDistance(start, finish) {
        let path = this.Dijkstra(start, finish)
        let res = 0
        for (let i = 0; i < path.length - 1; i++) {
            let nodes = this.adjacencyList[path[i]]
            for (let j of nodes) {
                if (j.node == path[i + 1])
                    res += j.weight
            }
        }
        return res
    }
}


let wg = new WeightedGraph()
wg.addVertex("A")
wg.addVertex("B")
wg.addVertex("C")
wg.addVertex("D")
wg.addVertex("E")
wg.addVertex("F")

wg.addEdge("A", "B", 4)
wg.addEdge("A", "C", 2)
wg.addEdge("B", "E", 3)
wg.addEdge("C", "D", 2)
wg.addEdge("C", "F", 4)
wg.addEdge("D", "E", 3)
wg.addEdge("D", "F", 1)
wg.addEdge("E", "F", 1)

console.log(wg.Dijkstra("A", "E"))
console.log(wg.totalDistance("A", "E"))