import React, { Component } from 'react';
import Axios from 'axios';
import "./classifyList.scss"

class ClassifyList extends Component {
  state = {
    datalist: []
  }
  render() {
    return (
      <div id="ClassifyList">
        <div className="detailNav">
            <div className="detailbar">
                <div className="back iconfont icon-jiantouzuo" onClick={()=>this.handleClick()}> 
                    <span>返回</span>
                </div>
                <div className="detailName"><span>商品列表</span></div> 
            </div> 
        </div>
        <div className="ClassifyList_product_list">
          {
            this.state.datalist.map((item,index)=>
              <div className="product-list-item" key={index}>
                <img src={item.spuInfo.images} alt=""/>
                <div className="item-content">
                  <h5>{item.spuInfo.spuTitle}</h5>
                  <p className="item-spuInfo">{item.spuInfo.spuSubTitle}</p>
                  <p className="item-price">
                    <span>￥</span>
                    <span>{item.spuInfo.price}.00</span>
                  </p>
                </div>
              </div>
            )
          }
        </div>
        
        
      </div>
    );
  }
  componentDidMount(){
    Axios.get(`/v1/search/goods-list?category_id=${localStorage.getItem("classifyId")}&page=1&num=20&sort=sort&channel_id=1002&type=shop`)
        .then(res=>{
            console.log(res.data.data.list)
            this.setState({
                datalist: res.data.data.list
            })
        })
  }
  handleClick(){
    this.props.history.goBack()
}
}

export default ClassifyList;