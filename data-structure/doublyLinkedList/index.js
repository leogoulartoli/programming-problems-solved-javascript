class Node {
    constructor(val) {
        this.val = val
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor() {
        this.reset()
    }

    reset() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    push(val) {
        const newNode = new Node(val)
        if (this.head === null) {
            this.head = newNode
            this.tail = this.head
        }
        else {
            newNode.prev = this.tail
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
    }

    pop() {
        if (!!this.length) {
            if (this.tail === this.head) {
                this.reset()
                return
            }
            this.tail = this.tail.prev
            this.tail.next = null
            this.length--
        }
    }

    shift() {
        if (this.length < 2) {
            return this.reset()
        }
        const oldHead = this.head
        this.head = oldHead.next
        oldHead.next = null
        this.head.prev = null
        this.length--
    }

    unshift(val) {
        const newNode = new Node(val)
        if (!this.length) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.head.prev = newNode
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
    }

    get(index) {
        if (index < 0 || index >= this.length) return null
        let startsWithHead = !!(this.length / 2 >= index)
        let counter = startsWithHead ? 0 : this.length - 1
        let node = startsWithHead ? this.head : this.tail
        while (counter !== index) {
            if (startsWithHead) {
                node = node.next
                counter++
            } else {
                node = node.prev
                counter--
            }
        }
        return node
    }

    set(index, val) {
        const node = this.get(index)
        if (!node) return false
        node.val = val
        return true
    }

    insert(index, val) {
        const currentNode = this.get(index)
        if (currentNode === null) return false
        const newNode = new Node(val)
        if (!currentNode.prev) this.unshift(val)
        else if (!currentNode.next) this.push(val)
        else {
            const preNode = currentNode.prev
            preNode.next = newNode
            newNode.prev = preNode
            newNode.next = currentNode
            currentNode.prev = newNode
        }
        this.length++
        return true
    }

    remove(index) {
        const removedNode = this.get(index)
        if (removedNode === null) return false
        if (!removedNode.prev) this.shift()
        else if (!removedNode.next) this.pop()
        else {
            const preNode = removedNode.prev
            const posNode = removedNode.next
            preNode.next = posNode
            posNode.prev = preNode
            removedNode.prev = null
            removedNode.next = null
        }
        this.length--
        return true
    }

    reverse() {
        let nodeFromHead = this.head
        let nodeFromTail = this.tail
        let counter = Math.floor(this.length / 2)
        for (let i = 0; i < counter; i++) {
            let temp = nodeFromHead.val
            nodeFromHead.val = nodeFromTail.val
            nodeFromTail.val = temp
            nodeFromTail = nodeFromTail.prev
            nodeFromHead = nodeFromHead.next
        }
    }

    printList() {
        let node = list.head
        while (node !== null) {
            console.log(node.val)
            node = node.next
        }
        let nodeBack = list.tail
        while (nodeBack !== null) {
            console.log(nodeBack.val)
            nodeBack = nodeBack.prev
        }
    }
}