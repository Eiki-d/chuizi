import React, { Component } from 'react'
import './cart.scss'
import { NavLink } from 'react-router-dom'

class Cart extends Component {
    render(){
        return <div className="page-cart no-goods">
                    <div className="header">
                        <h2 className="title">购物车</h2>
                    </div>
                    <div className="empty-container">
                        <div className="img-container"></div>
                        <h3>购物车暂无商品</h3>
                        <p>添加到购物车的商品将显示到这里</p>
                        <div className="buy-btn login"><NavLink to="../Login/login">登录</NavLink></div>
                        <div className="buy-btn box-border"><NavLink to="../Home/home">现在选购</NavLink></div>
                    </div>
                    
                </div>
    }
}

export default Cart
