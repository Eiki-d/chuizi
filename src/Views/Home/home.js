import React, { Component } from 'react'
import "./home.scss"
import Navbar from '../../Components/Navbar/navbar'

class Home extends Component {
    render(){
        return <div id="Home">
            
            <header className="iconfont icon-chuizi"></header>
            <Navbar/>
        </div>
    }
}

export default Home
