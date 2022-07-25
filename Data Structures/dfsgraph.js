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
    depthFirstRecursive(vertex) {
        let data = []
        let obj = {}
        let adjacencyList = this.adjacencyList;

        (function dfs(vertex) {
            obj[vertex] = true
            data.push(vertex)
            adjacencyList[vertex].forEach(i => {
                if (!obj[i]) dfs(i)
            })
        })(vertex)
        return data
    }
    depthFirstIterative(vertex) {
        let data = []
        let obj = {}
        let stack = [vertex]
        obj[vertex] = true
        let curr
        while (stack.length) {
            curr = stack.pop()
            data.push(curr)
            this.adjacencyList[curr].forEach(i => {
                if (!obj[i]) {
                    stack.push(i)
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
console.log(graph.depthFirstRecursive("A"))
console.log(graph.depthFirstIterative("A"))