import React from 'react'
// import { dataStructure } from '_util'

// const LinkList = dataStructure.LinkList
// const Tree = dataStructure.Tree

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

        // test tree
        /**
         * 11---22---44
         *        ---55
         *   ---33---66
         *        ---77
         */     
        // const tree = new Tree('11')
        // tree.addNode('22', '11')
        //     .addNode('33', '11')
        //     .addNode('44', '22')
        //     .addNode('55', '22')
        //     .addNode('66', '33')
        //     .addNode('77', '33')
        // tree.deepTraversal(
        //     node => {
        //         console.log(node.data)
        //     },
        // )
        // tree.removeNode('22', '11')
        // tree.deepTraversal(
        //     node => {
        //         console.log(node.data)
        //     },
        // )
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
