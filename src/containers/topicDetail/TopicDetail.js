import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as topicDetailAction from './topicDetailAction'
import styles from './topicDetail.less'

const mapStateToProps = state => state.topicDetail

@connect(mapStateToProps)
class TopicDetail extends Component {
    constructor(props) {
        super()
        this.topicDetailAction = bindActionCreators(topicDetailAction, props.dispatch)
    }

    componentDidMount() {
        console.log(this.props)
        const { match } = this.props
        this.topicDetailAction.getTopicDetailData(match.params.id)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.topic.content !== this.props.topic.content) {
            console.log('-------')
            window.document.getElementById('content').innerHTML = nextProps.topic.content
        }
    }

    render() {
        return (
            <div className={styles['topicDetail-container']}>
                <div id="content" />
            </div>
        )
    }
}

export default TopicDetail
