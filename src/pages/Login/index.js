import React, { Component } from 'react';
import { NavBar, Icon, InputItem, Button, Toast } from 'antd-mobile';
import { withRouter } from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);
        this.props = props
        this.state = {
            phoneError: false,
            phoneValue: '',
            pswError: false,
            pswValue: '',
            hasIcon: ""
        };
        this.backClick = this.backClick.bind(this)
        this.canLogin = this.canLogin.bind(this)
    }
    async componentDidMount() {
        if (this.props.location.query) {
            await this.setState({
                phoneValue: this.props.location.query.phone
            })
        }
    }
    //在卸载的时候对state的操作进行清除
    componentWillUnmount() {
        this.setState = (state, cb) => {
            return
        }
    }
    // 返回上次点击页面
    backClick() {
        this.props.history.go(-1)
    }

    //手机验证
    onPhoneErrorClick = () => {
        if (this.state.phoneError) {
            Toast.info('请输入11位手机号码');
        }
    }
    onPhoneChange = (phoneValue) => {
        if (phoneValue.replace(/\s/g, '').length < 11) {
            this.setState({
                phoneError: true,
            });
        } else {
            this.setState({
                phoneError: false,
            });
        }
        this.setState({
            phoneValue,
        });
    }

    //密码验证
    onPswChange = (pswValue) => {
        if (!/^[a-z][^\s]{5,11}$/i.test(pswValue)) {
            this.setState({
                pswError: true,
            });
        } else {
            this.setState({
                pswError: false,
            });
        }
        this.setState({
            pswValue,
        });
    }

    //登录验证
    canLogin() {}


    render() {
        return (
            <div className="login" style={{background: 'white',height: '100%'}}>
                <NavBar
                mode="light"
                icon={<Icon type="left" />}
                onLeftClick={this.backClick}
                ></NavBar>
                <div className="logo" style={{textAlign:'center',margin:'40px 0'}}>
                    <i className="iconfont icon-juejin" style={{fontSize:'45px',color:'#3280f6'}}></i>
                </div>
                <main className="login_main">
                    <InputItem
                        type='phone'
                        clear
                        placeholder="请输入手机号"
                        error={this.state.phoneError}
                        onErrorClick={this.onPhoneErrorClick}
                        onChange={this.onPhoneChange}
                        value={this.state.phoneValue}
                    >
                    </InputItem>
                    <InputItem
                        clear
                        type='password'
                        placeholder="请输入密码"
                        error={this.state.pswError}
                        onErrorClick={this.onPswErrorClick}
                        onChange={this.onPswChange}
                        value={this.state.pswValue}
                        maxLength={12}
                    >
                    </InputItem>
                    <Button className="loginBtn" onClick={this.canLogin}>登录</Button>
                </main>

            </div>
        )
    }
}

export default withRouter(Login);