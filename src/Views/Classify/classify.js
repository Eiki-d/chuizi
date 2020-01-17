import React, { Component } from 'react'
import {
    NavLink,
    Route,
    Redirect,
    Switch

} from 'react-router-dom'
import Navbar from '../../Components/Navbar/navbar'

import Axios from 'axios'
import store from '../../Redux/store'
import {getList, getListThunk} from '../../Redux/Actions/list'
import './classify.scss'

class Classify extends Component {
    state = {
        datalist:[],
        second: [],
        id: '',
        banner: []
    }
    
    render(){
        // console.log(this.state.second)
        return <div id="Classify">
          <div className="Classify">
            <div className="Navbar">
                <Navbar/>
            </div>
            
            <div className="category-container">
                <section className="left-wrap">
                    <ul className="first-list">
                        {
                            this.state.datalist.map((item,index)=>  
                                <NavLink to={`/classify`} key={index} item={item} onClick={()=>this.handleClick(item.classifyId,item.second,item.banner)} activeClassName="active">
                                  <span>{item.classifyName}</span>
                                </NavLink>
                            )
                        }
                    </ul>
                </section>
            </div>
          </div>
          <div className="classify_list">
              {
                this.state.banner.map((item,index)=>
                  <div className="banner-wrap" key={index}>
                    <img src={item.image} alt=""/>
                  </div>

                )
              }
              {
                this.state.second.map((item,index)=>
                  // console.log(item)
                  <div className="second-and-third-list" key={index}>
                    <h2>{item.classifyName}</h2>
                    <div className="list-flex-wrap">
                      {
                          item.third.map((item,index)=> 
                                <div className="flex-item"  key={index}  onClick={()=>this.handleClick1(item.classifyId)}>
                                  <div className="flex-item-image">
                                    {/* <img src={item.image.concat('',"?x-oss-process=image/resize,w_188/format,webp")} alt=""/>  */}
                                    <img src={item.image} alt=""/>
                                  </div>
                                  <div className="flex-item-title">
                                    {item.classifyName}
                                  </div>
                                </div>
                          )
                      }
                    </div> 
                  </div>  
                )

              }
          </div>
          
        </div>
        
    }
    handleClick = (id, second,banner)=>{
        console.log(id)
        console.log(second)
        localStorage.setItem('myid',id)
        // localStorage.setItem('second',second)
        var digitail_id = localStorage.getItem('myid')
        // var second= this.state.datalist[i].second
        for(var i=0; i<this.state.datalist.length; i++){
            if(this.state.datalist[i]==digitail_id){
                return this.state.datalist[i].second;
            }
        }
        this.setState({
            second: second,
            id: id,
            banner: banner
        })
        // console.log(this.state.second)
    }
    handleClick1(id){
      console.log(id)
      localStorage.setItem("classifyId",id)
      this.props.history.push(`/classifyList/${id}`)
    }
    componentDidMount(){
      Axios.get("/mobile/classify").then(res=>{
        console.log(res.data.data)
        this.setState({
          datalist: res.data.data,
          second:res.data.data[0].second
      })
      })
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
}

export default Classify

