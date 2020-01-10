import React, { Component } from 'react'
import {
    // NavLink,
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
        return <div>
            <Navbar/>

            <div className="category-container">
                <section className="left-wrap">
                    <ul className="first-list">
                        {
                            this.state.datalist.map((item,index)=>  
                            <li key={index} onClick={()=>this.handleClick(item.classifyId)}>{item.classifyName}</li>
                            // <NavLink to="/classify/digitail"></NavLink>
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
        for(var i=0; i<this.state.datalist.length; i++){
            if(this.state.datalist[i].classifyId===id){
                this.props.history.push('/classify/digitail')
            }

        }

    }


    
}

export default Classify
