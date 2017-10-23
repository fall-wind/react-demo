import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import fetch from 'isomorphic-unfetch'
import * as HomeAction from './topicsAction'
import styles from './topics.less'
// import { Spin } from 'antd'

const mapStateToProps = state => state.topics

@connect(mapStateToProps)
class Topics extends Component {
    constructor(props) {
        super()
        this.homeAction = bindActionCreators(HomeAction, props.dispatch)
    }

    async componentDidMount() {
        // this.homeAction.getcnodeData()
        const { dispatch } = this.props
        dispatch({
            type: 'HOME_try'
        })
        const res = await fetch('api/about')
        const result = await res.json()
        console.log(result, '????xxxjjsss')
    }

    handleTopicsListItemClick = id => {
        const { history } = this.props
        history.push(`/topic/${id}`)
    }

    render() {
        const { topicsList } = this.props

        return (
            <div className={styles['home-container']}>
                <div className={styles['topicsList-div']}>
                    {
                        topicsList.map(item => (
                            <TopicsListItem
                                key={item.id}
                                {...item}
                                handleTopicsListItemClick={this.handleTopicsListItemClick}
                            />
                        ))
                    }
                </div>
            </div>
        )
    }
}

const TopicsListItem = props => {
    const { title, author, id, handleTopicsListItemClick } = props
    return (
        <div
            className={styles.topicsListItem}
            onClick={() => handleTopicsListItemClick(id)}
        >
            <div className={styles['topicsListItem-left']}>
                <img src={author.avatar_url} alt="" />
            </div>
            <div className={styles['topicsListItem-right']}>
                <span>{title}</span>
            </div>
        </div>
    )
}

export default Topics
