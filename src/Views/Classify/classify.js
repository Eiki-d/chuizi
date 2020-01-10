import React, { Component } from 'react'
import {
    NavLink,
    Switch,
    Route
} from 'react-router-dom'
import Navbar from '../../Components/Navbar/navbar'
import Digitail from './Digital/digital'
// import Parts from './Parts/parts'
// import Parts from './Parts/parts'
import Axios from 'axios'
import './classify.scss'

class Classify extends Component {
    state = {
        datalist:[]
    }
    componentDidMount(){
        Axios.get("/mobile/classify").then(res=>{
            // console.log(res.data.data)
            this.setState({
                datalist: res.data.data
            })
        })
    }
    render(){
        return <div className="Classify">
            <div className="Navbar">
                <Navbar/>
            </div>
            

            <div className="category-container">
                <section className="left-wrap">
                    <ul className="first-list">
                        {
                            this.state.datalist.map((item,index)=>  
                            // <li key={index} onClick={()=>this.handleClick(item.classifyId)}>{item.classifyName}</li>
                            <NavLink to="/classify/digitail" key={index} onClick={()=>this.handleClick(item.classifyId)} activeClassName="active">{item.classifyName}</NavLink>
                            )
                        }
                    </ul>
                </section>
            </div>
            <Switch>
                <Route path="/classify/digitail" component={Digitail}/>
                {/* <Route path="/classify/parts" component={Parts}/> */}
            </Switch>
        </div>
    }
    handleClick = (id)=>{
        console.log(id)
        localStorage.setItem('myid',id)
    }


    
}

export default Classify
