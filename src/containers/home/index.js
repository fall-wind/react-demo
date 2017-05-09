import React,{Component} from 'react'
import {connect} from 'react-redux'

@connect((state)=> state.home)
class Home extends Component{
	render(){
		const {history} = this.props
		console.log(this.props)
		return <div>
		<button onClick={()=> history.push('/about')}>跳到关于</button>
		</div>
	}
}

export default Home