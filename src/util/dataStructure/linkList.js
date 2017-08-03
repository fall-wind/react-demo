/**
 * 节点
 */
class Node {
    constructor(element) {
        this.element = element
        this.next = null
    }
}

/**
 * 查找，删除，新增等操作传入的参数都是Node的 element属性
 */
class LinkList {
    constructor(head = 'head') {
        this.head = new Node(head)
    }

    find(element) {
        let currentNode = this.head
        while (currentNode.element !== element) {
            currentNode = currentNode.next
        }
        if (currentNode === this.head && this.head.element !== element) {
            throw Error('节点不存在')
        }
        return currentNode
    }

    findPrevious(element) {
        let previousNode = this.head
        while (!(previousNode.next === null) && previousNode.next.element !== element) {
            previousNode = previousNode.next
        }
        if (previousNode === this.head && this.head.element !== element) {
            throw Error('节点不存在')
        }
        return previousNode
    }

    // 向某一元素插入新节点
    insertNode(newElement, preElement) {
        const newNode = new Node(newElement)
        const previousNode = this.find(preElement)
        newNode.next = previousNode.next
        previousNode.next = newNode
        return this
    }

    deleteNode(element) {
        const previousNode = this.findPrevious(element)
        if (previousNode.next !== null) {
            previousNode.next = previousNode.next.next
        }
        return this
    }

    insertNodeToEnd(element) {
        let currentNode = this.head
        const newNode = new Node(element)
        while (currentNode.next !== null) {
            currentNode = currentNode.next
        }
        currentNode.next = newNode
        return this
    }

    editNode(element, newElement) {
        const currentElement = this.find(element)
        currentElement.element = newElement
        return this
    }

    display() {
        let currentElement = this.head
        while (currentElement.next !== null) {
            console.log(currentElement.next.element)
            currentElement = currentElement.next
        }
    }
}

export default LinkList
