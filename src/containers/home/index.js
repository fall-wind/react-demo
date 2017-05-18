import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as Database from '_rxdb'
import HeroList from '../heros/herosList/HeroList'
import HeroInsert from '../heros/herosInsert/HerosInsert'

const state = (state) => state.home

@connect(state)
class Home extends Component {

    render() {
        const {history} = this.props

        return <div className="home-container">
                <HeroList/>
                <HeroInsert/>
		</div>
    }
}

export default Home