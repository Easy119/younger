import React, { Component } from 'react'
import { Breadcrumb } from 'antd';
// import { Router, Route, Link, hashHistory } from 'react-router-dom';
import "./crumb.css"
export default class Crumb extends Component {
    render() {
        return (
            <div className='nav_crumb'>
                <Breadcrumb separator=">">
                    <Breadcrumb.Item>Location</Breadcrumb.Item>
                    <Breadcrumb.Item href="">Application Center</Breadcrumb.Item>
                    <Breadcrumb.Item href="">Application List</Breadcrumb.Item>
                    <Breadcrumb.Item>An Application</Breadcrumb.Item>
                </Breadcrumb>
            </div>
        )
    }
}
