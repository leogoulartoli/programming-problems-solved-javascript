class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    insert(val) {
        const newNode = new Node(val)
        if (this.root === null) {
            this.root = newNode
            return true
        }
        let currentNode = this.root
        while (true) {
            if (newNode.val > currentNode.val) {
                if (currentNode.right === null) {
                    currentNode.right = newNode
                    return true
                }
                currentNode = currentNode.right
            } else {
                if (currentNode.left === null) {
                    currentNode.left = newNode
                    return true
                }
                currentNode = currentNode.left
            }
        }
    }

    find(val) {
        if (this.root === null) return false
        let currentNode = this.root
        while (true) {
            if (val === currentNode.val) return currentNode
            if (currentNode.left === null && currentNode.right === null) return false
            if (val > currentNode.val) {
                currentNode = currentNode.right
            } else {
                currentNode = currentNode.left
            }
        }
        return false
    }

    breadthFirstSearch() {
        let data = [], queue = [], node = this.root
        queue.push(node)
        while (queue.length) {
            node = queue.shift()
            data.push(node.val)
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
        return data
    }

    depthFirstSearchPreOrder() {
        let data = []
        let node = this.root
        const traverse = (node) => {
            data.push(node.val)
            if (node.left) search(node.left)
            if (node.right) search(node.right)
        }
        traverse(node)
        return data
    }

    depthFirstSearchPostOrder() {
        let data = []
        let node = this.root
        const traverse = (node) => {
            if (node.left) traverse(node.left)
            if (node.right) traverse(node.right)
            data.push(node.val)
        }
        traverse(node)
        return data

    }

    depthFirstSearchInOrder() {
        let data = []
        let node = this.root
        const traverse = (node) => {
            if (node.left) traverse(node.left)
            data.push(node.val)
            if (node.right) traverse(node.right)
        }
        traverse(node)
        return data
    }
}
