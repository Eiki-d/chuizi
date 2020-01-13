import React, { Component } from 'react'
import {
    NavLink,
    Switch,
    Route,
    Redirect
} from 'react-router-dom'
import Navbar from '../../Components/Navbar/navbar'
import Classify_list from './Classify_list/classify_list'
import Axios from 'axios'
import './classify.scss'

class Classify extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datalist:[]
        }
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
        // let {second} = this.props
        // console.log(this.props)
        return <div className="Classify">
            <div className="Navbar">
                <Navbar/>
            </div>
            

            <div className="category-container">
                <section className="left-wrap">
                    <ul className="first-list">
                        {
                            this.state.datalist.map((item,index)=>  
                            // <li key={index}>{item.classifyName}</li>
                            <NavLink item={item} to="/classify/classify_list" key={index} onClick={()=>this.handleClick(item.classifyId,item.second)} activeClassName="active">{item.classifyName}</NavLink>
                            )
                        }
                    </ul>
                </section>
            </div>
            <Switch>
                <Route path="/classify/classify_list" component={Classify_list}/>
                <Redirect from="/classify" to="/classify/classify_list" exact/>
                {/* <Route path="/classify/parts" component={Parts}/> */}
            </Switch>
        </div>
    }
    handleClick = (id, second)=>{
        console.log(id)
        console.log(second)
        localStorage.setItem('myid',id)
        var digitail_id = localStorage.getItem('myid',id)
        // var second= this.state.datalist[i].second
        for(var i=0; i<this.state.datalist.length; i++){
            if(this.state.datalist[i]==digitail_id){
                return this.state.datalist[i].second;
            }

        }
    }


    
}

export default Classify
