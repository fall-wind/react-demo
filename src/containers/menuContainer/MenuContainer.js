import { Menu, Icon } from 'antd'
import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
const SubMenu = Menu.SubMenu
const MenuItemGroup = Menu.ItemGroup

class MenuContainer extends React.Component {

    handleClick = (e) => {
        console.log('click ', e);
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
                <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
                    <MenuItemGroup key="g1" title="Item 1">
                        <Menu.Item key="1">
                            <Link to="/">英雄</Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Link to="/about">关于</Link>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Link to="/topics">主题列表</Link>
                        </Menu.Item>
                    </MenuItemGroup>
                </SubMenu>
                <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
                    <Menu.Item key="5">Option 5</Menu.Item>
                    <Menu.Item key="6">Option 6</Menu.Item>
                    <SubMenu key="sub3" title="Submenu">
                        <Menu.Item key="7">Option 7</Menu.Item>
                        <Menu.Item key="8">Option 8</Menu.Item>
                    </SubMenu>
                </SubMenu>
                <SubMenu key="sub4" title={<span><Icon type="setting" /><span>Navigation Three</span></span>}>
                    <Menu.Item key="9">Option 9</Menu.Item>
                    <Menu.Item key="10">Option 10</Menu.Item>
                    <Menu.Item key="11">Option 11</Menu.Item>
                    <Menu.Item key="12">Option 12</Menu.Item>
                </SubMenu>
            </Menu>
        );
    }
}

export default MenuContainer