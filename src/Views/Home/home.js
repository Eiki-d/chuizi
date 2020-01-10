import React, { Component } from 'react'
import "./home.scss"
import Navbar from '../../Components/Navbar/navbar'
import Axios from 'axios'
import  Swiper from '../../Components/Swiper/Swiper'

class Home extends Component {
    state = {
        bannerlist: [],
        datalist: [],
        goodsOnelist: []
        // ofn: []
    }
    render(){
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
                            <div className="swiper-slide" key={index}>
                                <img src={item.image} alt=""/>
                            </div>  
                            // console.log(item) 
                        )
                    }
                </Swiper>
                </div>
            </div>

            {/* 以旧换新   图片 */}
            <div className="ofn">
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
                            <Swiper key={item.skuInfo.length}>
                                {
                                    item.skuInfo.map((item,index)=>
                                        // console.log(data)
                                        <div className="swiper-slide flex-item" key={index}>
                                            <div>
                                                <div className="home_box_banner">
                                                    <img src={item.images} alt=""/>
                                                </div>
                                            </div>
                                            <div>
                                                {/* <span>{data}</span>
                                                <span>{data}</span> */}
                                            </div>
                                        </div>
                                    )
                                }
                            </Swiper>
                        </div>
                    </div>
                )
            }

        </div>
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
                goodsOnelist: res.data.data.splice(2,9)
            })
        })
    }
}

export default Home
