import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Login from '../containers/login/Login'
import Home from '../containers/home/Home'

const totalHeight = document.body.clientHeight

const RootRouter = () => (
	<Router>
		<div className="app-container">
			{/* <div className="top-container">
				<Topbar />
			</div>
			<div className="body-container" style={{ height: totalHeight - 60 }}>
				<MenuContainer className="menu-container" />
				<div className="content-container">
					<Route path="/about" component={CanvasTry} />
					<Route exact path="/" component={DataStructureTest} />
					<Route path="/topics" component={Topics} />
					<Route path="/topic/:id" component={TopicDetail} />
				</div>
			</div> */}
			<Route exact path="/" component={Login} />
			<Route path="/home" component={Home} />
		</div>
	</Router>
)

export default RootRouter
