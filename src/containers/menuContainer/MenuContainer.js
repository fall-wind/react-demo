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
                title:'复制过来的',
                to:'/'
            },
            {
                title:'关于',
                to:'/about'
            },
            {
                title:'文章列表',
                to:'/topics'
            }
        ]
    }
]

class MenuContainer extends React.Component {

    handleClick = (e) => {
        console.log('click ', e)
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
                return <SubMenu key={index} title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
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