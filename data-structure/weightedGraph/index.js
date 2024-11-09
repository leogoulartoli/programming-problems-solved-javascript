class WeightedGraph {
    constructor() {
        this.adjacencyList = {}
    }

    addVertex(key) {
        if (!this.adjacencyList[key]) this.adjacencyList[key] = []
    }


    addEdge(v1, v2, weight) {
        if (this.adjacencyList[v1] && this.adjacencyList[v2]) {
            this.adjacencyList[v1].push({ val: v2, weight })
            this.adjacencyList[v2].push({ val: v1, weight })
        }
    }

    Dijkstra(start, finish) {
        const nodes = new PriorityQueue()
        const distances = {}
        const previous = {}
        const pathResult = []

        let smallest;

        for (let vertex in this.adjacencyList) {
            if (vertex === start) {
                distances[vertex] = 0
                nodes.enqueue(vertex, 0)
            } else {
                distances[vertex] = Infinity
                nodes.enqueue(vertex, Infinity)
            }
            previous[vertex] = null
        }

        while (nodes.values.length) {
            smallest = nodes.dequeue().val
            if (smallest === finish) {
                //path to return at end
                while (previous[smallest]) {
                    pathResult.push(smallest)
                    smallest = previous[smallest]
                }
                break
            } if (smallest || distances[smallest] !== Infinity) {
                for (let neighbor in this.adjacencyList[smallest]) {
                    const nextNode = this.adjacencyList[smallest][neighbor]
                    const nextNeighbor = nextNode.val
                    //Calculate new distance to neighboring node
                    const candidate = distances[smallest] + nextNode.weight

                    if (candidate < distances[nextNeighbor]) {
                        //Update new smallest distance to neighbor
                        distances[nextNeighbor] = candidate
                        previous[nextNeighbor] = smallest
                        nodes.enqueue(nextNeighbor, candidate)
                    }
                }
            }
        }
        return pathResult.concat(smallest).reverse()
    }
}


class PriorityQueue {
    constructor() {
        this.values = []
    }
    enqueue(node, priority) {
        this.values.push({ val: node, priority })
        this.sort()
    }
    dequeue() {
        return this.values.shift()
    }

    sort() {
        this.values.sort((a, b) => a.priority - b.priority)
    }
}

const graph = new WeightedGraph()

graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addVertex("D")
graph.addVertex("E")
graph.addVertex("F")

graph.addEdge("A", "B", 4)
graph.addEdge("A", "C", 2)
graph.addEdge("B", "E", 3)
graph.addEdge("C", "D", 2)
graph.addEdge("C", "F", 4)
graph.addEdge("D", "E", 3)
graph.addEdge("D", "F", 1)
graph.addEdge("E", "F", 1)

console.log(graph.Dijkstra("A", "F"))