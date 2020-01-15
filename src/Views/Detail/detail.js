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
        Axios.get(`/product/spus?ids=${localStorage.getItem('id')}`)
        .then(res=>{

            this.setState({
                detaillist: res.data.data.list,
                detailBannerList: res.data.data.list
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

        // Axios.get(`/product/skus?ids=${localStorage.getItem('sku')}&with_stock=true&with_spu=true`)
        // .then(res=>{
        //     console.log(res.data.data)
        //     this.setState({
        //         // filminfo:res.data.detailMovie
        //         detaillist: res.data.data.list,
        //         detailBannerList: res.data.data.list
        //     })
        // })
        
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
                <div className="item-footer">
                    <li onClick={()=>this.handleClick1()} className="cart-entry">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAYAAACMRWrdAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJrSURBVHgB7ZnLUQJBEIabVxU3MYMxAjEDjEDNQA5QRXFQI1Az0ANFFRwgAzECCAEjkAzcIwce/oO7iuA+eu3ZBZ2vamt3ahtm/nn0dM8SWSwWi+WLDBmm1+uVZrNZeblcqlWFmcykVquNyDDGhLmCriDoGsXSxmsH12A+n983Go0JGcCIsFarVc7n808YHRViOsF1Ua/XxySMuLB2u62y2exwQ5QeIa/xZfo+gg5G7kR65PIkTC6X6+Gm3OIEja6i0aN1G4i/hPhbV3zJ/c0pCSI6Yt1ut4I1NfTKEHXkNxIQV4GgddvTzQ74DVkSBKLO14r9oOnlihh4ZYg8J0FEhYFj7wEiX8KMMUrP3vNisVAkiLSwT7B+HI491twBCWJMWNpYYfvGnxUmvUHfwNOtoopisRglTBrp/Us/wCuynM2/JVbk0el0rnC7o+2oXRoH28YD0px7YsIWpoNcRAmvlCBBoZkfbOeBdERR8ihiIh0rDgqFwqHuYfpIVUTs0ZnsqIQtDFmx8nsHz/ZYrVYdd9qMKISo9uiAQ2LCFoaYrhTw7kzf9TpEY8oU/l+R7PGO7aTiTEXfSuDBruEx37RziXAswLE3LwwNCKuE24hQ+wh1bsEWFmdaCGDeeaD3RPMmU4iuMYMoYrIv0X0ia0xR8uyEVzRBuvuYQcwK0x8aKCW4dbOETafT1IRx62YJQ+iTmjAuLGEpOQ4PxTHem1Mqbk7GEhaUi5mGm5OxhAXlYrsGdyqmJowb8eyN8+DWzRKWUi4WC5YwHL70ySxLvwsnWQ+M/4l3YIpbhRIEHTpuNptRvgVYLBaL5UfeAWeL6tgW6zwZAAAAAElFTkSuQmCC"/>
                    </li>
                    <li onClick={()=>this.handleClick1()} className="box-border">
                        <span>现在购买</span>
                    </li>
                    <li onClick={()=>this.handleClick1()} className="highlight">
                        <span>加入购物车</span>
                    </li>
                </div>
            </div>
        )
    }
    handleClick(){
        this.props.history.goBack()
    }
    handleClick1(){
        this.props.history.push('/center')
    }
}


export default Detail