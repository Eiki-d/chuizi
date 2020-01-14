import React, { Component } from 'react'
import {
    NavLink
} from 'react-router-dom'
import Navbar from '../../Components/Navbar/navbar'
// import Classify_list from './Classify_list/classify_list'
import Axios from 'axios'
import store from '../../Redux/store'
import {getList, getListThunk} from '../../Redux/Actions/list'
import './classify.scss'

class Classify extends Component {
    state = {
        datalist:[],
        second: null,
        id: ''
    }

    componentDidMount(){
        
        if(store.getState().listReducer.length===0){
            store.dispatch(getListThunk(()=>{
                // console.log("数据完事了",store.getState().listReducer)
                this.setState({
                    datalist:store.getState().listReducer
                })
            }))
        }else{
            // console.log("缓存")
            this.setState({
                datalist:store.getState().listReducer
            })
        }
    }
    render(){
        // console.log(this.state.second)
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
                                <div key={index} onClick={()=>this.handleClick(item.classifyId,item.second)} item={item.second}>
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
    handleClick = (id, second)=>{
        console.log(id)
        // console.log(second)
        localStorage.setItem('myid',id)
        var digitail_id = localStorage.getItem('myid')
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
