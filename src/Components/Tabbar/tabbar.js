import React, { Component } from 'react'
import {
  NavLink
} from 'react-router-dom'
import "./tabbar.scss"
class Tabbar extends Component{
    render(){
        return <div className="tabbar">
            
            <ul className="tabbar_list">
                <li>
                    <NavLink to="/home" activeClassName="active">
                    <span className="iconfont icon-shouye"></span>
                    <span className="tabbar_title">首页</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/classify" activeClassName="active">
                    <span className="iconfont icon-fenlei"></span>
                    <span className="tabbar_title">分类</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/cart" activeClassName="active">
                    <span className="iconfont icon-cartproductStyle"></span>
                    <span className="tabbar_title">购物车</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/center" activeClassName="active">
                    <span className="iconfont icon-tabmeinactive
"></span>
                    <span className="tabbar_title">个人中心</span>
                    </NavLink>
                </li>
                
            </ul>
        </div>
    }
}
export default Tabbar
