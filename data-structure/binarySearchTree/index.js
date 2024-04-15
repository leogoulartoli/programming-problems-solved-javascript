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


}
