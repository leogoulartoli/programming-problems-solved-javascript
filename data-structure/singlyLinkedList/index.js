class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.reset()
    }

    reset() {
        this.length = 0;
        this.tail = null;
        this.head = null;
    }

    push(val) {
        let newNode = new Node(val)
        if (!this.head) {
            this.head = newNode
            this.tail = this.head
        }
        else {
            this.tail.next = newNode
            this.tail = this.tail.next
        }
        this.length++
        return this;
    }

    pop() {
        let current = this.head
        if (!this.head || !current.next) {
            this.reset()
            return
        }
        while (current.next) {
            if (current.next === this.tail) {
                this.tail = current
                this.tail.next = null
                this.length--
                return this
            }
            current = current.next
        }

    }

    unshift(val) {
        let newNode = new Node(val)

        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.next = this.head
            this.head = newNode
        }

        this.length++
        return this
    }

    shift() {
        if (!this.head || this.length === 0) {
            this.reset()
            return undefined
        }
        this.head = this.head.next
        this.length--
        return this
    }

    get(index) {
        if (index > this.length - 1 || index < 0) return null
        let counter = 0;
        let current = this.head
        while (counter < index) {
            current = current.next
            counter++
        }
        return current
    }

    set(val, index) {
        let foundNode = this.get(index)
        if (!foundNode) return false
        foundNode.val = val
        return true
    }

    insert(val, index) {
        if (index < 0 || index > this.length) return false
        if (index === this.length) return this.push(val)
        if (index === 0) return this.unshift(val)
        let previousNode = this.get(index - 1)
        let newNode = new Node(val)
        newNode.next = previousNode.next
        previousNode.next = newNode
        this.length++
        return true
    }

    remove(index) {
        if (index < 0 || index > this.length) return undefined
        if (index === this.length - 1) return this.pop()
        if (index === 0) return this.shift()
        let previousNode = this.get(index - 1)
        let removedNode = previousNode.next
        previousNode.next = previousNode.next.next
        this.length--
        return removedNode.val
    }

    reverse() {
        let node = this.head
        this.head = this.tail
        this.tail = node
        let nextNode = node.next
        this.tail.next = null
        while (node !== this.head) {
            let temp = nextNode.next
            nextNode.next = node
            node = nextNode
            nextNode = temp
        }
        return this
    }

    print() {
        let arr = [];
        let current = this.head
        while (current) {
            arr.push(current.val)
            current = current.next
        }
        return arr
    }

}

const list = new SinglyLinkedList()

list.unshift(4)
list.unshift(3)
list.push(5)
list.push(6)
list.push(5)
console.log(list.print())