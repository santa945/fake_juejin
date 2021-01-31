import React, { Component } from 'react'
import { bindActionCreators, combineReducers } from 'redux'
import commonActionCreators from './actions/common'
import { connect } from 'react-redux'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'

import './assets/icon/iconfont.css'
import './App.scss'
import './css/reset.css'
import './css/common.css'

//页面路由
import Home from "./pages/Home"
import Hot from "./pages/Hot"
import Find from "./pages/Find"
import Booklet from "./pages/Booklet"
import Mine from "./pages/Mine"
import Login from "./pages/Login"
import Own from "./pages/Own"


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTab: this.props.home.currentTab
        }
    }

    goto (name) {
        const { history, updateTab } = this.props
        updateTab(name)
        history.push('/' + name)
    }

    //刷新时，currentTab随着当前路由保持一致
    componentDidMount () {
        const currentTab = this.props.location.pathname.slice(1)
        const { updateTab } = this.props
        updateTab(currentTab)
    }


    render () {
        // 显示底部按钮的路由
        const footPath = ['/home', '/hot', '/find', '/booklet', '/mine']
        let currentPath = this.props.location.pathname
        return (
            <div className='app'>
                <main className="main">
                    <Switch>
                        <Route path="/home" component={Home} />
                        <Route path="/hot" component={Hot} />
                        <Route path="/find" component={Find} />
                        <Route path="/booklet" component={Booklet} />
                        <Route path="/mine" component={Mine} />
                        <Route path="/login" component={Login} />
                        <Route path="/own" component={Own} />
                        <Redirect from='/' to="/home" />
                    </Switch>
                </main>
                {
                    footPath.some(item => currentPath === item) ?
                        <footer className="footer">
                            <ul>
                                <li onClick={this.goto.bind(this, 'home')} className={this.props.home.currentTab === 'home' ? "selected" : null}>
                                    <i className="iconfont icon-shouye" style={{ fontSize: '22px' }}></i>
                                    <span>首页</span>
                                </li>
                                <li onClick={this.goto.bind(this, 'hot')} className={this.props.home.currentTab === 'hot' ? "selected" : null}>
                                    <i className="iconfont icon-dian" style={{ fontSize: '22px' }}></i>
                                    <span>
                                        沸点
                    </span>
                                </li>
                                <li onClick={this.goto.bind(this, 'find')} className={this.props.home.currentTab === 'find' ? "selected" : null}>
                                    <i className="iconfont icon-fangdajing" style={{ fontSize: '22px' }}></i>
                                    <span>
                                        发现
                    </span>
                                </li>
                                <li onClick={this.goto.bind(this, 'booklet')} className={this.props.home.currentTab === 'booklet' ? "selected" : null}>
                                    <i className="iconfont icon-cezi" style={{ fontSize: '22px' }}></i>
                                    <span>
                                        小册
                    </span>
                                </li>
                                <li onClick={this.goto.bind(this, 'mine')} className={this.props.home.currentTab === 'mine' ? "selected" : null}>
                                    <i className="iconfont icon-wo2" style={{ fontSize: '22px' }}></i>
                                    <span>
                                        我
                    </span>
                                </li>
                            </ul>
                        </footer>
                        : null
                }
            </div>
        )
    }
}
App = withRouter(App)

export default connect(
    state => state,
    dispatch => bindActionCreators(commonActionCreators, dispatch)

)(App)
