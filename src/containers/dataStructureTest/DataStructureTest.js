import React from 'react'
import { dataStructure } from '_util'

console.log(dataStructure)
const LinkList = dataStructure.LinkList

class DataStructureTest extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentDidMount() {
        const linklist = new LinkList('one')
        console.log(linklist)
        linklist.insertNodeToEnd('two').insertNodeToEnd('three')
        console.log(linklist)
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
