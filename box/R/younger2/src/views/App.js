import { Button } from 'antd';
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import '../style/app.css'
import AccountSet from "../pages/AccountSet"
import Behavier from "../pages/Behavier"
import User from "../pages/User"
import Store from "../pages/Store"
import Home from "../pages/Home"
import Crumb from "../components/crumb/Crumb"
export default class App extends Component {
    render() {
        return (
            <div className="">
                <Router>
                    <div className='nav_home'>
                        <Home></Home>
                        <div className='nav_content'>
                            <Crumb></Crumb>
                            <div className='nav_router_view'>
                                <Route path="/home/store" exact component={Store} ></Route>
                                <Route path="/home/account" exact component={AccountSet} ></Route>
                                <Route path="/home/behavior" exact component={Behavier} ></Route>
                                <Route path="/home/user" exact component={User} ></Route>
                            </div>
                        </div>
                    </div>
                </Router>
            </div>
        )
    }
}

