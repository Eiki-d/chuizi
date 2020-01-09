import React, { Component } from 'react'
import './navbar.scss'
import {
    NavLink
} from 'react-router-dom'
class Navbar extends Component{
    render(){
        return <div className="navbar">
            <div className="navbarSearch">
                <NavLink to="/search">
                    <div className="iconfont icon-sousuo"></div>
                    <input type="text" placeholder="请输入搜索关键字"/>
                </NavLink>
            </div>
        </div>
    }
}

export default Navbar