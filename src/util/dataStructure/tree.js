function findChildIndex(children, data) {
    return children.findIndex(child => child.data === data)
}

class Node {
    constructor(data) {
        this.data = data
        this.parent = null
        this.children = []
    }
}

class Tree {
    constructor(data) {
        const node = new Node(data)
        this.rootNode = node
    }

    /**
     * 深度遍历
     * 1. 将根节点作为参数
     * 2. 
     * @param {*} callback 
     * @param {*} node 
     */
    deepTraversal(callback, node = this.rootNode) {
        const nodes = []
        if (node !== null) {
            let stack = []
            stack.push(node)
            while (stack.length !== 0) {
                const item = stack.pop()
                callback(item)
                nodes.push(item)
                stack = stack.concat(item.children.reverse())
            }
        }
        return nodes
    }

    /**
     * 广度遍历
     * @param {*} callback 
     * @param {*} node 
     */
    wideTraversal(callback, node = this.rootNode) {
        const nodes = []
        if (node !== null) {
            let queue = []
            queue.unshift(node)
            while (queue.length !== 0) {
                const item = queue.shift()
                callback(item)
                nodes.push(item)
                queue = queue.concat(item.children)
            }
        }
        return nodes
    }

    contains(callback, traversal = this.deepTraversal) {
        traversal.call(this, callback)
    }

    /**
     * 
     * @param {*} data 
     * @param {*} toData 
     * @param {*} traversal 
     */
    addNode(data, fatherData, traversal) {
        const node = new Node(data)
        let parent = null
        const callback = element => {
            if (element.data === fatherData) {
                parent = element
            }
        }

        this.contains(callback, traversal)

        if (parent) {
            parent.children.push(node)
            node.parent = parent
        } else {
            throw new Error('Cannot add node to a non-existent parent.')
        }

        return this
    }

    removeNode(data, fatherData, traversal) {
        let parent = null
        let childToRemove = null
        let index

        const callback = element => {
            if (element.data === fatherData) {
                parent = element
            }
        }
        this.contains(callback, traversal)
        if (parent) {
            index = findChildIndex(parent.children, data)
            if (index === undefined) {
                throw new Error('Node to remove does not exist.')
            } else {
                childToRemove = parent.children.splice(index, 1)
            }
        } else {
            throw new Error('Parent does not exist.')
        }

        return childToRemove
    }
}

export default Tree
