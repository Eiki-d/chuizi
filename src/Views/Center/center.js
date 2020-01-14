import React, { Component } from 'react'
import './center.scss'
import { NavLink } from 'react-router-dom'

class Center extends Component {
    render(){
        return <div className="wrap-box">
            {/* Center */}
                <div className="page-title">
                    <h2 className="title">个人中心</h2>
                </div>

                <div className="wrapper page-for-center">
                    <NavLink to="./Login/login">
                        <div className="common-box">
                            <div className="avatar">
                                <img src="//static.smartisanos.cn/account/asset/img/default-user-avatar.png" alt=""/>
                            </div>
                            登录/注册
                            <span className="iconfont icon-jiantou"></span>
                        </div>
                    </NavLink>
                    <ul className="menu-list">
                        <li>
                            {/* <NavLink to="/home" activeClassName="active"> */}
                            <span className="iconfont icon-dingdan"></span>
                            <span className="tabbar_title">全部订单</span>
                            {/* </NavLink> */}
                        </li>
                        <li>
                            {/* <NavLink to="/classify" activeClassName="active"> */}
                            <span className="iconfont icon-wodedaifukuan"></span>
                            <span className="tabbar_title">待付款</span>
                            {/* </NavLink> */}
                        </li>
                        <li>
                            {/* <NavLink to="/cart" activeClassName="active"> */}
                            <span className="iconfont icon-daishouhuo"></span>
                            <span className="tabbar_title">待收货</span>
                            {/* </NavLink> */}
                        </li>
                        <li className="serve">
                            {/* <NavLink to="/center" activeClassName="active"> */}
                            <span className="iconfont icon-shouhou"></span>
                            <span className="tabbar_title">售后</span>
                            {/* </NavLink> */}
                        </li>
                    </ul>

                    <ul className="coupon">
                        <li>
                            <p>地址管理</p>
                            <span className="iconfont icon-jiantou"></span>
                        </li>
                        <li>
                            <p>我的优惠券</p>
                            <span className="iconfont icon-jiantou"></span>
                        </li>
                        <li>
                            <p>优先购买码</p>
                            <span className="iconfont icon-jiantou"></span>
                        </li>
                    </ul>

                    <ul className="question">
                        <li>
                            <p>零售门店</p>
                            <span className="iconfont icon-jiantou"></span>
                        </li>
                        <li>
                            <p>以旧换新</p>
                            <span className="iconfont icon-jiantou"></span>
                        </li>
                        <li>
                            <p>常见问题</p>
                            <span className="iconfont icon-jiantou"></span>
                        </li>
                        {/* <li>
                            <p>服务支持</p>
                            <span className="iconfont icon-jiantou"></span>
                        </li> */}
                    </ul>
                </div>

            </div>
    }
}

export default Center
