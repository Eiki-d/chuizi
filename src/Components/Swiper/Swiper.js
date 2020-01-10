import React, {Component} from 'react'
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
import "./swiper.scss"

class MySwiper extends Component{
  render(){
    return <div className="swiper-container amy">
      <div className="swiper-wrapper">
        {this.props.children}
      </div>
      <div className="swiper-pagination"></div>
    </div>
  }
  componentDidMount(){
    new Swiper(".amy", {
      pagination: {
        el: '.swiper-pagination',
      },
      autoplay:true,
      loop : true,
    })
  }
}

export default MySwiper
