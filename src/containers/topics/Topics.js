import React, { Component } from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
//import * as Database from '_rxdb'
import * as HomeAction from './topicsAction'
import styles from './topics.less'

const state = (state) => state.topics

@connect(state)
class Topics extends Component {
    constructor(props){
        super()
        this.homeAction = bindActionCreators(HomeAction,props.dispatch)
    }

    componentDidMount(){
        this.homeAction.getcnodeData()
        console.log(this.props)
    }

    handleTopicsListItemClick(id){
        const {history} = this.props
        console.log(id,'will jump')
        history.push(`/topic/${id}`)
    }

    render() {
        const {history,topicsList} = this.props

        return <div className={styles['home-container']}>
            <div className={styles['topicsList-div']}>
                {topicsList.map(item => <TopicsListItem
                        key={item.id}
                        {...item} 
                        handleTopicsListItemClick={::this.handleTopicsListItemClick}
                />)}
            </div>
		</div>
    }
}

const TopicsListItem = ({title,author,id,handleTopicsListItemClick}) => {
    return (
        <div onClick = {handleTopicsListItemClick.bind(this,id)} className={styles['topicsListItem']}>
            <div className={styles['topicsListItem-left']}>
                <img src={author.avatar_url} alt=""/>
            </div>
            <div className={styles['topicsListItem-right']}>
                <span>{title}</span>
            </div>
        </div>  
    )    
}

export default Topics