import React, { Component } from 'react'
import './navbar.scss'

class Navbar extends Component{
    render(){
        return <div className="navbar">
            <div className="navbarSearch">
                <div className="iconfont icon-sousuo"></div>
                <input type="text" value="请输入搜索关键字"/>
            </div>
        </div>
    }
}

export default Navbar