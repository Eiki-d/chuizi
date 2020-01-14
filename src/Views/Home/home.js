import React, { Component } from 'react'
import "./home.scss"
import Navbar from '../../Components/Navbar/navbar'
import Axios from 'axios'
import  Swiper from '../../Components/Swiper/Swiper'
import  Swiper_two from '../../Components/Swiper/swiper_two'
import List from "./List/list"
import {withRouter} from 'react-router'
import {connect} from 'react-redux'
import {ActivityIndicator,PullToRefresh} from 'antd-mobile'
// import {getList, getListThunk} from '../../../Redux/Actions/list'


class Home extends Component {
    state = {
        bannerlist: [],
        datalist: [],
        goodsOnelist: [],
        urllist: [],
        animating:true,
        current:1,
        // ids: [] ,
        skulist: []
    }
    render(){
        // console.log(this.props)
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
                <ul onScroll={()=>this.handleScroll()}>
                    <div className="cnxh">
                        <h2>猜你喜欢</h2>
                    </div>
            <PullToRefresh
                    damping={60}
                    style={{
                    // height: '400px',
                    overflow: 'auto',
                    }}
                    direction={'up'}
                    refreshing={this.state.refreshing}
                    onRefresh={this.refresh}
                >
                {
                    this.state.skulist.map((item,index)=>
                        // <FilmItem key={item} item={item} {...this.props}></FilmItem>
                        // console.log(item)
                        // <FilmItem key={item.id} item={item}></FilmItem>
                        <div key={index}>
                            <List key={index} item={item}></List>  
                        </div>  
                        
                    )
                }
            </PullToRefresh>
            </ul>
            {/* <div>
                <ActivityIndicator
                toast
                text="正在加载..."
                animating={this.state.animating}
                />
            </div> */}
        </div>
    }
    handleClick = (id)=>{
        // console.log(id)
        this.props.history.push(`/detail/${id}`)
    }
    handleClick1 = (url)=>{
        // console.log(url)
    }
    handleClick2 = (myid)=>{
        // console.log(myid)
        // console.log(this.props)

    }
    handleScroll(){
        // window.scroll
    }
    componentDidMount(){
        Axios({
            url: '/mobile/home'
        }).then(res=>{
            // console.log(res.data.data)
            this.setState({
                datalist: res.data.data,
                bannerlist: res.data.data[0].list,
                typelist: res.data.data[1].image,
                urllist: res.data.data[1].url,
                goodsOnelist: res.data.data.splice(2,9),
            })
        })
        
    }
    refresh = ()=>{
    
        // if(this.state.datalist.length===this.state.ids.length){
        //     return ;
        // }
    
        this.setState({
            refreshing:true
        })
    
        // var newid =[]
        // for(var i=0;i<this.state.ids.length;i++){
        //     newid = this.state.ids.slice(this.state.current*10,(this.state.current+1)*10)
        // }
        
        Axios({
            url: `/mobile/skulist?page=${this.state.current}`
          }).then(res=>{
              // console.log(res.data.data.skuInfo)
            this.setState({
                // datalist: res.data.data.skuInfo,
                skulist:[...this.state.datalist,...res.data.data.skuInfo],
                current: this.state.current+1
            })
        })
    }
}

export default withRouter(Home)