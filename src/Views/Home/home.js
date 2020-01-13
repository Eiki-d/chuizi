import React, { Component } from 'react'
import "./home.scss"
import Navbar from '../../Components/Navbar/navbar'
import Axios from 'axios'
import  Swiper from '../../Components/Swiper/Swiper'
import  Swiper_two from '../../Components/Swiper/swiper_two'
import List from "./List/list"
import {withRouter} from 'react-router'


class Home extends Component {
    state = {
        bannerlist: [],
        datalist: [],
        goodsOnelist: [],
        urllist: []
        // ofn: []
    }
    render(){
        console.log(this.props)
        return <div id="Home">
            {/* 头部 */}
            <header>
                <span className="iconfont icon-chuizi"></span>
            </header>

            {/* 搜索框 */}
            <Navbar/>

            {/* 轮播图 */}
            <div className="home_banner">
                <div className="banner_img">
                <Swiper key={this.state.bannerlist.length}>
                    {
                        this.state.bannerlist.map((item,index)=>
                            <div className="swiper-slide" key={index} onClick={()=>this.handleClick2(item.url)}>
                                <img src={item.image} alt=""/>
                            </div>  
                            // console.log(item) 
                        )
                    }
                </Swiper>
                </div>
            </div>

            {/* 以旧换新   图片 */}
            <div className="ofn" onClick={()=>this.handleClick1(this.state.urllist)}>
                <img src={this.state.typelist} alt=""/>
            </div>

            {/* home-box  轮播列表 */}
            {
                this.state.goodsOnelist.map((item,index)=>
                    // console.log(item.header.image)
                    <div className="home-box" key={index}>
                        <div className="home_box_under_image" key={index}>
                            <img src={item.header.image} alt=""/>
                        </div>
                        <div className="home_box_banner">
                            <Swiper_two key={item.skuInfo.length} loop={false}>
                                {
                                    item.skuInfo.map((item,index)=>
                                        // console.log(data)
                                        <div className="swiper-slide flex-item" key={index}>
                                            <div className="flex-item_box" onClick={()=>this.handleClick(item.skuId)}>
                                                <div className="home_box_banner_image">
                                                    <img src={item.images} alt=""/>
                                                </div>
                                                <div className="flex-item_goods">
                                                    <span className="spuTitle">{item.spuTitle}</span>
                                                    {/* <span className="discountPrice">￥{item.discountPrice}</span> */}
                                                    <span className="originalPrice"> ￥{item.originalPrice}</span>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    )
                                }
                            </Swiper_two>
                        </div>
                    </div>
                )
            }
            {/* 猜你喜欢列表 */}
            <List></List>
            
        </div>
    }
    handleClick = (id)=>{
        console.log(id)
        this.props.history.push(`/detail/${id}`)
    }
    handleClick1 = (url)=>{
        console.log(url)
        // this.props.history.push(url)
        // this.props.history.push({
        //     pathname: {url}
        // });
    }
    handleClick2 = (myid)=>{
        console.log(myid)
        console.log(this.props)
        
        // this.props.history.push(`{myid}`)
        // this.props.location.push({myid})
        // window.location.href({myid})
    }
    componentDidMount(){
        Axios({
            url: '/mobile/home'
        }).then(res=>{
            // console.log(res.data)
            this.setState({
                datalist: res.data.data,
                bannerlist: res.data.data[0].list,
                typelist: res.data.data[1].image,
                urllist: res.data.data[1].url,
                goodsOnelist: res.data.data.splice(2,9)
            })
        })
    }
   
}

export default withRouter(Home)