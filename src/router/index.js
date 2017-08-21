import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
// import { Menu } from 'antd'
import MenuContainer from '../containers/menuContainer/MenuContainer'
import Topbar from '../containers/topbar/TopBar'
import Topics from '../containers/topics/Topics'
import TopicDetail from '../containers/topicDetail/TopicDetail.js'
import CanvasTry from '../containers/canvastry/CanvasTry.js'
import DataStructureTest from '../containers/dataStructureTest/DataStructureTest.js'

// const SubMenu = Menu.SubMenu
// const MenuItemGroup = Menu.ItemGroup

const totalHeight = document.body.clientHeight

const RootRouter = () => (
	<Router>
		<div className="app-container">
			<div className="top-container">
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
			</div>
		</div>
	</Router>
)

export default RootRouter
