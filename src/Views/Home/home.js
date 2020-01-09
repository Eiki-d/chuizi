import React, { Component } from 'react'
import "./home.scss"
import Navbar from '../../Components/Navbar/navbar'

class Home extends Component {
    render(){
        return <div id="Home">
            {/* 头部 */}
            <header>
                <span className="iconfont icon-chuizi"></span>
            </header>

            {/* 搜索框 */}
            <Navbar/>

            {/* 轮播图 */}
            

        </div>
    }
}

export default Home
