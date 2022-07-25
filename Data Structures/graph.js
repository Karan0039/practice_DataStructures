class Graph {
    constructor() {
        this.adjacencyList = {}
    }
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
    }
    addEdge(v1, v2) {
        this.adjacencyList[v1].push(v2)
        this.adjacencyList[v2].push(v1)

    }
    removeEdge(v1, v2) {
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v != v2)
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v != v1)
    }
    deleteVertex(v) {
        while (this.adjacencyList[v].length) {
            let vertex = this.adjacencyList[v].pop()
            this.removeEdge(vertex, v)
        }
        delete this.adjacencyList[v]
    }
}


let graph = new Graph()
graph.addVertex("Tokyo")
graph.addVertex("Dallas")
graph.addVertex("Aspen")
graph.addVertex("Hongkong")
graph.addEdge("Tokyo", "Dallas")
graph.addEdge("Aspen", "Dallas")
graph.addEdge("Hongkong", "Dallas")
graph.addEdge("Hongkong", "Tokyo")
    //graph.removeEdge("Dallas", "Tokyo")
graph.deleteVertex("Hongkong")
console.log(graph)