class Graph {
    constructor() {
        this.adjacencyList = {}
    }

    addVertex(key) {
        if (!this.adjacencyList[key]) this.adjacencyList[key] = []
        console.log(this.adjacencyList)
    }


    addEdge(v1, v2) {
        if (this.adjacencyList[v1] && this.adjacencyList[v2]) {
            this.adjacencyList[v1].push(v2)
            this.adjacencyList[v2].push(v1)
        }
    }

    removeEdge(v1, v2) {
        if (this.adjacencyList[v1] && this.adjacencyList[v2]) {
            const v1FilteredArray = this.adjacencyList[v1].filter(e => e !== v2)
            const v2FilteredArray = this.adjacencyList[v2].filter(e => e !== v1)
            this.adjacencyList[v1] = v1FilteredArray
            this.adjacencyList[v2] = v2FilteredArray
        }
    }

    removeVertex(key) {
        const list = Object.entries(this.adjacencyList)
        for (let i = 0; i < list.length; i++) {
            this.adjacencyList[list[i][0]] = list[i][1].filter(val => val !== key)
        }
        delete this.adjacencyList[key]
    }

    depthFirstTraversal(start) {
        const result = []
        const visited = {}
        const adjacencyList = this.adjacencyList

        const traverse = (vertex) => {
            if (!vertex) return

            visited[vertex] = true
            result.push(vertex)
            adjacencyList[vertex].forEach(neighbor => {
                if (!visited[neighbor]) return traverse(neighbor)
            })
        }
        traverse(start)
        return result
    }

    depthFirstTraversalIterative(start) {
        const stack = [start]
        const visited = {}
        const result = []

        visited[start] = true
        const adjacencyList = this.adjacencyList

        while (stack.length) {
            const vertex = stack.pop()
            result.push(vertex)

            adjacencyList[vertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true
                    stack.push(neighbor)
                }
            })

        }
        return result
    }

    breadthFirstTraversal(start) {
        const queue = [start]
        const results = []
        const visited = {}

        visited[start] = true

        while (queue.length) {
            const vertex = queue.shift()
            results.push(vertex)

            this.adjacencyList[vertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true
                    queue.push(neighbor)
                }
            })
        }
        return results
    }
}

const graph = new Graph()

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

console.log(graph.breadthFirst("E"))