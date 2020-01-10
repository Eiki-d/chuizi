import React, { Component } from 'react'
// import {withRouter} from 'react-router'
import Axios from 'axios'
import "./digital.scss"

class digital extends Component {
    state = {
        datalist: []
        // goodsList:[]
    }
    componentDidMount(){
        Axios({
            url: '/mobile/classify'
        }).then(res=>{
            // console.log(res.data)
            this.setState({
                datalist: res.data.data,
                goodsList: this.refresh
            })
        })
        console.log(this.state.goodsList)
    }
    render() {
        console.log(this.state.datalist)
        // let {item} = this.props
        // console.log(item)
        return (
            <div className="classify_digital">
                {
                    this.state.datalist.map((item,index)=>
                        // console.log(item)
                        <div key={index}>
                            {
                                item.second.map((item,index)=>
                                    // console.log(item)
                                    <div key={index}>
                                        <div>
                                            <h3>{item.classifyName}</h3>
                                        </div>
                                        {
                                            item.third.map((item,index)=>
                                            <div key={index}>
                                                <img src={item.image} style={{width:".85rem"}}/>
                                            </div>
                                            )
                                        }
                                        
                                    </div>   
                                )
                            }
                        </div>
                        
                         
                    )
                }
            </div>
        )
    }
    // refresh = ()=>{
    //     var tel = localStorage.getItem('myid')
    //     for(var i=0; i<this.state.datalist.length; i++){
    //         console.log(this.state.datalist[i].classifyId)
    //         var goodsArr=[]
    //         if(this.state.datalist[i].classifyId===tel){
    //             goodsArr+= this.state.datalist[i]
    //             return goodsArr
    //         }
    //         console.log(goodsArr)
    //     }
    // }
    // goodsList(){
    //     var tel = localStorage.getItem('myid')
    //     var goodsArr=[]
    //     for(var i=0; i<this.state.datalist.length; i++){
    //         console.log(this.state.datalist[i].classifyId)
    //         if(this.state.datalist[i].classifyId===tel){
    //             // goodsArr = this.state.datalist[i]
    //             return goodsArr
    //         }
    //         console.log(goodsArr)
    //     }
    // }
    
}

export default digital
