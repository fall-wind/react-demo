import React, {Component} from 'react'
import * as topicDetailAction from './topicDetailAction'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import styles from './topicDetail.less'

const mapStateToProps = (state, ownProps) => state.topicDetail

@connect(mapStateToProps)
class TopicDetail extends Component {
    constructor(props){
        super()
        this.topicDetailAction = bindActionCreators(topicDetailAction,props.dispatch)
    }

    componentDidMount(){
        console.log(this.props)
        const {match} = this.props
        this.topicDetailAction.getTopicDetailData(match.params.id)
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.topic.content){
            console.log('-------')
            document.getElementById('content').innerHTML = nextProps.topic.content
        }
    }

    render(){
        const {topic} = this.props

        return <div className={styles['topicDetail-container']}>
            <div id="content">
            </div>
        </div>
    }
}

export default TopicDetail