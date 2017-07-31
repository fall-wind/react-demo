import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
// import { Menu } from 'antd'
import MenuContainer from '../containers/menuContainer/MenuContainer'
import Topbar from '../containers/topbar/TopBar'
import Topics from '../containers/topics/Topics'
import TopicDetail from '../containers/topicDetail/TopicDetail.js'
import CanvasTry from '../containers/canvastry/CanvasTry.js'

// const SubMenu = Menu.SubMenu
// const MenuItemGroup = Menu.ItemGroup

const totalHeight = document.body.clientHeight

const Topic = ({ match }) => (
	<div>
		<h3>{match.params.topicId}</h3>
	</div>
)

const OtherTopics = ({ match }) => (
	<div>
		<h2>主题列表111ddd</h2>
		<ul>
			<li>
				<Link to={`${match.url}/rendering`}>
				使用 React 渲染
				</Link>
			</li>
			<li>
				<Link to={`${match.url}/components`}>
				组件
				</Link>
			</li>
			<li>
				<Link to={`${match.url}/props-v-state`}>
				属性 v. 状态
				</Link>
			</li>
		</ul>

		<Route path={`${match.url}/:topicId`} component={Topic} />
		<Route
			exact
			path={match.url}
			render={() => (
				<h3>请选择一个主题。</h3>
			)}
		/>
	</div>
)

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
					<Route exact path="/" component={OtherTopics} />
					<Route path="/topics" component={Topics} />
					<Route path="/topic/:id" component={TopicDetail} />
				</div>
			</div>
		</div>
	</Router>
)

export default RootRouter
