import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as canvasTestAction from './canvasTryAction'
import styles from './canvasTry.less'

@connect(state => state.canvasTest)
class CanvasTry extends Component {
    constructor(props) {
        super()
        this.canvasTestAction = bindActionCreators(canvasTestAction, props.dispatch)
    }

    componentDidMount() {
        this.canvasTestAction.whyNotUnHMR(true)
    }

    render() {
        return (
            <div className={styles['canvas-test-container']}>
                <div id="canvas" className={styles['canvas-show-stage']} />
            </div>
        )
    }
}

export default CanvasTry
