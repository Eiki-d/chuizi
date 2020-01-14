/* eslint-disable no-useless-concat */
import React, { Component } from 'react'

import './login.scss'

class Login extends Component {
    render(){
        return <div className="box">
            {/* Login */}
                <div className="header">
                    <h2 className="title">短信验证码登录</h2>
                </div>

                <div className="content ng-scope">
                    <form name="form">
                        <div className="input">
                            <input type="text" placeholder="请输入正确的手机号"/>
                        </div>

                        <div className="verification">
                            <input type="text" placeholder="短信验证码"/>
                        </div>
                        <div className="catch">
                            <div className="caught">获取验证码</div>
                        </div>
                    </form>
                    <button className="btn">登录</button>
                </div>
            </div>
    }
}

export default Login
