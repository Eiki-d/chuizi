import React, { Component } from 'react'
// import {withRouter} from 'react-router'
import Axios from 'axios'
class digital extends Component {
    state = {
        datalist: []
        // goodsList:[]
    }

    render() {
        // let {item} = this.props
        // console.log(item)
        return (
            <div>
                digital
                {/* {
                    this.state.datalist.map(item=>
                        console.log(item)
                    //     // <div>
                    //     //     <div>{item.}</div>
                    //     //     <div>
                    //     //         <img src={}/>
                    //     //     </div>
                    //     // </div>    
                    )
                } */}
            </div>
        )
    }
    goodsList(){
        var tel = localStorage.getItem('myid')
        for(var i=0; i<this.state.datalist.length; i++){
            if(this.state.datalist[i].classifyId===tel){
                return 
            }
        }

    }
    componentDidMount(){
        Axios("/mobile/classify").then(res=>{
            console.log(res.data.data)
            this.setState({
                datalist: res.data.data
                // this.goodsList()
            })
            // this.state.datalist:res.data.data
            
            // this.setState({
            // })
        })
        console.log(this.state.datalist)
        
    }
}

export default digital
