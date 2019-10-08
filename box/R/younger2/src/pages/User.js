import React, { Component } from 'react'
import { List } from 'antd'
import axios from "axios"
import "../style/user.css"
export default class User extends Component {
    constructor() {
        super()
        this.state = {
            UserList: [],
            HeaderList: ['序号', '手机号', '姓名', '职务', '角色', '所属大区', '所谓门店', '操作']
        }
    }
    componentWillMount() {
        this._initData();
    }
    _initData() {
        axios.defaults.headers['Authorization'] = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9kZXZ5Z2Uuc29ndWt6LmNvbVwvYWRtaW5cL2NvbW1vblwvbG9naW4iLCJpYXQiOjE1NzA1MTU0NTksImV4cCI6MTYwNjgwMzQ1OSwibmJmIjoxNTcwNTE1NDU5LCJqdGkiOiJGellNVlAybDJzWlFsMHBkIiwic3ViIjoxLCJwcnYiOiJkZjg4M2RiOTdiZDA1ZWY4ZmY4NTA4MmQ2ODZjNDVlODMyZTU5M2E5In0.t01YiBDUW5Kj2IjndP8S8uyLEBYnEBxecsIbpn2Q38A';
        axios.post('https://devyge.sogukz.com/admin/user/list', { page: 1, size: 12 }).then(res => {
            console.log(res.data.data.data)
            if (res.data.code == 200) {
                this.setState({
                    UserList: res.data.data.data
                })
            }
        })
    }
    render() {
        let header = this.state.HeaderList.map(item => <div  className='list_item_span'>{item}</div>);
        return (
            <div>
                <h1>User</h1>
                <List
                    header={<div className='headerTab'>{header}</div>}
                    dataSource={this.state.UserList}
                    renderItem={(item, index) => (
                        <List.Item
                            className='list_item'
                            actions={[<a key="list-loadmore-edit">edit</a>, <a key="list-loadmore-more">more</a>]}
                        >
                            <div className='list_item_span'>{index+1}</div>
                            <div className='list_item_span'>{item.phone}</div>
                            <div className='list_item_span'>{item.admin_name}</div>
                            <div className='list_item_span'>{item.post}</div> 
                            <div className='list_item_span'>{item.role_name}</div>
                            <div className='list_item_span'>{item.area_name}</div>
                            <div className='list_item_span'>{item.store_name}</div>
                        </List.Item>
                    )}
                />
            </div>
        )
    }
}
