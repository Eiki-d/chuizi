import React, { Component } from 'react'
import Axios from 'axios'
import Store from '../../Redux/store'
import {showAction,hideAction} from '../../Redux/Actions/detail'
import "./detail.scss"
import Swiper from "../../Components/Swiper/Swiper"
// import TabMenu from './TabMenu/tabmenu'

class Detail extends Component {

    state = {
        detaillist: [],
        detailBannerList: []
    }

    componentWillUnmount(){
        // 显示tabbar
        Store.dispatch(showAction())
    }
    

    componentDidMount() {
        // console.log("发布")
        // 隐藏tabbar
        Store.dispatch(hideAction())


        // 动态路由接受参数
        // console.log(this.props.match.params.myid)
        console.log(localStorage.getItem.spuId)
        Axios.get(`/product/spus?ids=${localStorage.getItem('spuId')}`)
        .then(res=>{
            // console.log(res.data.data)

            this.setState({
                // filminfo:res.data.detailMovie
                detaillist: res.data.data.list
            })
        })
        Axios.get(`/product/skus?ids=${localStorage.getItem('id')}&with_stock=true&with_spu=true`)
        .then(res=>{
            console.log(res.data.data)

            this.setState({
                // filminfo:res.data.detailMovie
                detaillist: res.data.data.list,
                detailBannerList: res.data.data.list
            })
        })
        
        // query接受参数
        // console.log(this.props.location.query.id)
    }
    
    render() {
        return (
            <div className="detail">
                {
                    this.state.detaillist.map((item,index)=>
                        <div key={index}>
                            <div className="detailNav">
                                <div className="detailbar">
                                    <div className="back iconfont icon-jiantouzuo" onClick={()=>this.handleClick()}> 
                                        <span>返回</span>
                                    </div>
                                    <div className="detailName"><span>{item.name}</span></div> 
                                </div> 
                            </div>
                            {
                                this.state.detailBannerList.map((item,index)=>
                                    // console.log(item)
                                    <div className="detail_content" key={index}>
                                        <div className="detailBanner">
                                            <Swiper key={item.length}>
                                                {
                                                    item.shop_info.ali_images.map((item,index)=>
                                                        <div className="swiper-slide" key={index}>
                                                            <img src={item} alt=""/>
                                                        </div>
                                                    )
                                                }
                                            </Swiper>
                                        </div>
                                    </div>      
                                )
                            }
                            <div className="detail_content_title">
                                <h2>{item.name}</h2>
                                <div className="detail_content_price">
                                    <span>￥</span>
                                    <span>{item.price}</span>
                                </div>
                            </div>
                            <div className="Goods_detail">
                                <div className="Goods_detail_title">
                                    <h3>商品详情</h3>
                                        {/* // console.log(item.shop_info.tpl_content.base.images.ali_mobile.url) */}
                                    <img src={item.shop_info.tpl_content.base.images.ali_mobile.url} alt="" style={{width:"100%"}}/>
                                        {/* // item.shop_info.tpl_content.base.images.ali_mobile.url.map(item=>
                                        //     // console.log(item)
                                        //     // <img src={item} alt=""/>
                                        // ) */}
                                    
                                </div>
                            </div>
                        </div>
                    )
                    
                }
                
                {/* <TabMenu></TabMenu> */}
            </div>
        )
    }
    handleClick(){
        this.props.history.goBack()
    }
}


export default Detail