import React, { Component } from 'react'

import { List, NavBar } from 'antd-mobile'
import api from './../../apis'
//引入样式
import './mine.scss'
import store from '../../store';
import { getCookie } from '../../script/utils';


const Item = List.Item;


class Mine extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTab: 'mine',
            userPhone: '登录',
            userIcon: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1798168535,2067053286&fm=15&gp=0.jpg'
        }
    }

    //在此生命周期判断是否登录
    componentDidMount() {
        store.dispatch({ type: 'UPDATE_TAB', payload: 'mine' })
        //判定是否已经登录
        let userPhone = getCookie('juejinUser');
        console.log(api);
        api.getUserInfo({id:12333}).then(res=>{
            console.log(res);
        })
        if (userPhone) {
            //有cookie代表登录了
            this.setState({
                userPhone
            })
        }else{
            //无cookie则展示普通
        }
    }

    render() {
        const userIcon = this.state.userIcon
        return (
            <div className="mine">
                <NavBar mode="light">我</NavBar>
                <div className="header">
                    <List style={{ margin: '16px 0' }}>
                        <Item arrow="horizontal" style={{ height: '80px' }}>
                            <img src={userIcon} alt="avatar" />
                            <span style={{ verticalAlign: 'middle' }}>登录 / 注册</span>
                        </Item>
                    </List>
                </div>
                <div className="main">
                    <List>
                        <Item style={{ padding: '0' }} onClick={() => { }} >
                            <div style={{ paddingLeft: '20px' }}>
                                <i className="iconfont icon-fangdajing" />
                                <span style={{ marginLeft: "10px" }}>消息中心</span>
                            </div>
                        </Item>
                        <Item style={{ padding: '0' }} onClick={() => { }} >
                            <div style={{ paddingLeft: '20px' }}>
                                <i className="iconfont icon-fangdajing" />
                                <span style={{ marginLeft: "10px" }}>我赞过的</span>
                            </div>
                        </Item>
                        <Item style={{ padding: '0' }} onClick={() => { }} >
                            <div style={{ paddingLeft: '20px' }}>
                                <i className="iconfont icon-fangdajing" />
                                <span style={{ marginLeft: "10px" }}>收藏集</span>
                            </div>
                        </Item>
                        <Item style={{ padding: '0' }} onClick={() => { }} >
                            <div style={{ paddingLeft: '20px' }}>
                                <i className="iconfont icon-fangdajing" />
                                <span style={{ marginLeft: "10px" }}>已购小册</span>
                            </div>
                        </Item>
                        <Item style={{ padding: '0' }} onClick={() => { }} >
                            <div style={{ paddingLeft: '20px' }}>
                                <i className="iconfont icon-fangdajing" />
                                <span style={{ marginLeft: "10px" }}>我的钱包</span>
                            </div>
                        </Item>
                        <Item style={{ padding: '0' }} onClick={() => { }} >
                            <div style={{ paddingLeft: '20px' }}>
                                <i className="iconfont icon-fangdajing" />
                                <span style={{ marginLeft: "10px" }}>阅读过的文章</span>
                            </div>
                        </Item>
                        <Item style={{ padding: '0' }} onClick={() => { }} >
                            <div style={{ paddingLeft: '20px' }}>
                                <i className="iconfont icon-fangdajing" />
                                <span style={{ marginLeft: "10px" }}>标签管理</span>
                            </div>
                        </Item>
                    </List>
                    <List style={{ marginTop: '16px' }}>
                        <Item style={{ padding: '0' }} onClick={() => { }} >
                            <div style={{ paddingLeft: '20px' }}>
                                <i className="iconfont icon-fangdajing" />
                                <span style={{ marginLeft: "10px" }}>意见反馈</span>
                            </div>
                        </Item>
                        <Item style={{ padding: '0' }} onClick={() => { }} >
                            <div style={{ paddingLeft: '20px' }}>
                                <i className="iconfont icon-fangdajing" />
                                <span style={{ marginLeft: "10px" }}>设置</span>
                            </div>
                        </Item>
                    </List>
                </div>
            </div>
        )
    }
}

export default Mine