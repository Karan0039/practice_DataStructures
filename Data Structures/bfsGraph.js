class Graph {
    constructor() {
        this.adjacencyList = {}
    }
    addVertex(v) {
        if (!this.adjacencyList[v]) this.adjacencyList[v] = []
    }
    addEdge(v1, v2) {
        this.adjacencyList[v1].push(v2)
        this.adjacencyList[v2].push(v1)
    }
    bfs(vertex) {
        let queue = [vertex]
        let data = []
        let obj = {}
        obj[vertex] = true
        let curr
        while (queue.length) {
            curr = queue.shift()
            data.push(curr)
            this.adjacencyList[curr].forEach(i => {
                if (!obj[i]) {
                    queue.push(i)
                    obj[i] = true
                }
            })
        }
        return data
    }
}


let graph = new Graph()
graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addVertex("D")
graph.addVertex("E")
graph.addVertex("F")

graph.addEdge("A", "B")
graph.addEdge("A", "C")
graph.addEdge("B", "D")
graph.addEdge("C", "E")
graph.addEdge("D", "E")
graph.addEdge("D", "F")
graph.addEdge("E", "F")

console.log(graph)
console.log(graph.bfs("A"))