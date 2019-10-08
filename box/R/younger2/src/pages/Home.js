import { Menu, Icon } from 'antd';
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import "../style/home.css"
const { SubMenu } = Menu;
export default class Home extends Component {
    rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

    state = {
        openKeys: ['sub1'],
    }
    onOpenChange = openKeys => {
        const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            this.setState({ openKeys });
        } else {
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : [],
            });
        }
    }

    render() {
        return (
            <div className='nav_bg'>
                <Menu mode="inline" theme="dark" openKeys={this.state.openKeys} onOpenChange={this.onOpenChange} style={{ width: 256 }} >
                    <SubMenu key="sub1" title={ <span> <Icon type="mail" /> <span>店铺管理</span></span>} >
                        <Menu.Item key="1"><Link to="/home/store">门店</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>记录查询</span></span>}>
                        <Menu.Item key="2"><Link to="/home/account">资产</Link></Menu.Item>
                        <Menu.Item key="3"><Link to="/home/behavior">行为</Link></Menu.Item>
                        {/* <SubMenu key="sub3" title="Submenu">
                            <Menu.Item key="7">Option 7</Menu.Item>
                            <Menu.Item key="8">Option 8</Menu.Item>
                        </SubMenu> */}
                    </SubMenu>
                    <SubMenu  key="sub4" title={ <span><Icon type="setting" /> <span>用户</span></span>}>
                        <Menu.Item key="4"><Link to="/home/user">用户管理</Link></Menu.Item>
                    </SubMenu>
                </Menu>
            </div>
        )
    }
}

