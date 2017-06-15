import React,{Component} from 'react'
import styles from './canvasTry.less'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as canvasTestAction from './canvasTryAction'

@connect(state =>  state.canvasTest)
class CanvasTry extends Component{
    constructor(props){
        super()
        this.canvasTestAction = bindActionCreators(canvasTestAction,props.dispatch)
    }

    componentDidMount(){
        this.canvasTestAction.whyNotUnHMR(true)
    }

    drawSomthing(){
        
    }

    render(){
        return <div className={styles['canvas-test-container']}>
            <div id="canvas" className={styles['canvas-show-stage']}>
            </div>
        </div>
    }
}

export default CanvasTry