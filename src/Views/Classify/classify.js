import React, { Component } from 'react'
import {
    NavLink
} from 'react-router-dom'
import Navbar from '../../Components/Navbar/navbar'
import Classify_list from './Classify_list/classify_list'
import Axios from 'axios'
import './classify.scss'

class Classify extends Component {
    state = {
        datalist:[],
        second: null,
        id: ''
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
        console.log(this.state.second)
        return <div className="Classify">
            <div className="Navbar">
                <Navbar/>
            </div>
            
            <div className="category-container">
                <section className="left-wrap">
                    <ul className="first-list">
                    <NavLink to={`/classify/classify_list/${this.state.id}`} activeClassName="active">
                        {
                            this.state.datalist.map((item,index)=>  
                                // <li key={index}>{item.classifyName}</li>
                                
                                <div key={index} onClick={()=>this.handleClick(item.classifyId,item.second)}>
                                    <span>{item.classifyName}</span>
                                </div>
                            )
                        }
                    </NavLink>
                        
                    </ul>
                </section>
                <div className="right-wrap">
                    {/* {
                        console.log(this.state.second),
                        this.state.second.map((item,index)=>  
                            <Classify_list key={index} item={item}></Classify_list>
                        )
                    } */}
                </div>
            </div>
        </div>
    }
    // render() {
    //     return (
    //         <div>
    //             <ul>111111111
    //                 <Classify_list/>
    //             {/* {
    //                 this.state.datalist.map(item=>
    //                     // <FilmItem key={item} item={item} {...this.props}></FilmItem>
    //                     <FilmItem key={item.id} item={item}></FilmItem>    
    //                 )
    //             } */}
    //             </ul>
    //         </div>
    //     )
    // }
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
        this.setState({
            second: second,
            id: id
        })
        // console.log(this.state.second)
    }
}

export default Classify
