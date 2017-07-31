import { Menu, Icon } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

const SubMenu = Menu.SubMenu
// const MenuItemGroup = Menu.ItemGroup
const MenuList = [
    {
        key: 'key1',
        title: '列表',
        subMenuList: [
            {
                title: '炫酷屌炸天的d3111',
                to: '/'
            },
            {
                title: '不一般的canvas',
                to: '/about'
            },
            {
                title: 'cnode文章列表',
                to: '/topics'
            }
        ]
    }
]

class MenuContainer extends React.Component {
    handleClick = () => {
        console.log('------')
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
            {MenuList.map(item => (
                <SubMenu key={item.title} title={<span><Icon type="mail" /><span>{item.title}</span></span>}>
                    {
                        item.subMenuList.map(element => (<Menu.Item key={`${item.title}_${element.title}`}>
                            <Link to={element.to}>{element.title}</Link>
                        </Menu.Item>))
                    }
                </SubMenu>
            ))}
            </Menu>
        )
    }
}

export default MenuContainer
