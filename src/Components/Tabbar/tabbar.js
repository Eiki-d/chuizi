import React, { Component } from 'react'
import "./tabbar.scss"
class Tabbar extends Component{
    render(){
        return <div className="tabbar">
            <ul className="tabbar_list">
                <li>
                    <span className="iconfont icon-shouye"></span>
                    <span className="tabbar_title">首页</span>
                </li>
                <li>
                    <span className="iconfont icon-fenlei"></span>
                    <span className="tabbar_title">分类</span>
                </li>
                <li>
                    <span className="iconfont icon-cartproductStyle"></span>
                    <span className="tabbar_title">购物车</span>
                </li>
                <li>
                    <span className="iconfont icon-tabmeinactive
"></span>
                    <span className="tabbar_title">个人中心</span>
                </li>
                
            </ul>
        </div>
    }
}
export default Tabbar
