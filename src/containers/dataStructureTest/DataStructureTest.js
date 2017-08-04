import React from 'react'
import { dataStructure } from '_util'

console.log(dataStructure)
// const LinkList = dataStructure.LinkList
const Tree = dataStructure.Tree

class DataStructureTest extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentDidMount() {
        // test linklist
        // const linklist = new LinkList('one')
        // console.log(linklist)
        // linklist.insertNodeToEnd('two').insertNodeToEnd('three')
        // console.log(linklist)

        const tree = new Tree('one')
        tree.addNode('three', 'one', tree.deepTraversal)
        tree.deepTraversal(
            node => {
                console.log(node.data)
            },
            tree.rootNode,
        )
    }

    render() {
        return (
            <div>
                hello everyone
            </div>
        )
    }
}

export default DataStructureTest
