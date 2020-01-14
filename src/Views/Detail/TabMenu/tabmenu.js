import React, {Component} from 'react'
import "./tabmenu.scss"
import {
  NavLink,
  Route,
  Switch,
  Redirect
} from "react-router-dom"
import Goods from "../Goods/goods"
import Det from "../Det/det"


export default class TabMenu extends Component{
  handleClick(){
    console.log("111")
  }
  render(){
    return <div className="TabMenu">
        <ul className="TabMenuList">
          <NavLink to="/goods" activeClassName="active" className="TabMenListLi" onClick={()=>this.handleClick()}>
            <span>商品</span>
          </NavLink>
          <NavLink to="/det" activeClassName="active" className="TabMenuListLi" onClick={()=>this.handleClick()}>
            <span>详情</span>
          </NavLink>
          {/* <NavLink to="/" activeClassName="active" className="TabMenuListLi" onClick={()=>this.handleClick()}>
            <span>参数</span>
          </NavLink>
          <NavLink to="/" activeClassName="active" className="TabMenuListLi" onClick={()=>this.handleClick()}>
            <span>推荐</span>
          </NavLink> */}
          {/* <Switch>
              <Route path="/detail/:id/goods" component={Goods}/>
              <Route path="/detail/:id/det" component={Det}/>
              <Redirect from="/detail/:id" to="/detail/:id/goods" exact/>
          </Switch> */}
        </ul>
    </div>
  }
}