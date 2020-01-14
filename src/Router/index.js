import {
    HashRouter,
    // BrowserRouter,
    Route,
    Redirect,
    Switch
} from 'react-router-dom'
import React from 'react'
import App from '../App'
import Home from '../Views/Home/home'
import Classify from '../Views/Classify/classify'
import Cart from '../Views/Cart/cart'
import Center from '../Views/Center/center'
import Detail from '../Views/Detail/detail'
import Login from '../Views/Login/login'
import Search from '../Views/Search/search'
import Error from '../Views/error'
// import {Provider} from 'react-redux'
// import Store from '../Redux/store'
const router = (
    <HashRouter>
        <App>
            <Switch>
                <Route path="/home" render={()=>
                    <Home>
                    </Home>
                } />
                <Route path="/home" component={Home}/>
                <Route path="/classify" component={Classify}/>
                <Route path="/cart" component={Cart}/>
                <Route path="/login" component={Login}/>
                <Route path="/search" component={Search} exact/>
                {/* <Route path="/center" render={()=>
                    localStorage.getItem("token")?<Center/>:<Redirect to="/login"/>
                }/>  */}
                <Route path="/center" component={Center}/>
                <Route path="/error" component={Error}/>
                <Route path="/detail/:id" component={Detail} exact/>
                <Redirect from="/" to="/home" exact/>
                <Redirect to="/error"/>
            </Switch>
        </App>
    </HashRouter>
)


export default router
