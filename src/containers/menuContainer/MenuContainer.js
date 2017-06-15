import { Menu, Icon } from 'antd'
import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
const SubMenu = Menu.SubMenu
const MenuItemGroup = Menu.ItemGroup

const MenuList = [
    {
        key:'key1',
        title:'列表',
        subMenuList:[
            {
                title:'炫酷屌炸天的d3111',
                to:'/'
            },
            {
                title:'不一般的canvas',
                to:'/about'
            },
            {
                title:'cnode文章列表',
                to:'/topics'
            }
        ]
    }
]

class MenuContainer extends React.Component {

    handleClick = (e) => {

    }

    render() {
        return (
            <Menu
                onClick={this.handleClick}
                style={{ width: 240 }}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
            >
            {MenuList.map((item,index) => {
                return <SubMenu key={index} title={<span><Icon type="mail" /><span>{item.title}</span></span>}>
                    {item.subMenuList.map((element,i) => <Menu.Item key={`${index}_${i}`}>
                            <Link to={element.to}>{element.title}</Link>
                        </Menu.Item>)}
                </SubMenu>
            })}
            </Menu>
        )
    }
}

export default MenuContainer