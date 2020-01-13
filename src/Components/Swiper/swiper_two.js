import React, {Component} from 'react'
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'

class MySwiper extends Component{
  render(){
    return <div className="swiper-container amy1">
      <div className="swiper-wrapper">
        {this.props.children}
      </div>
    </div>
  }
  componentDidMount(){
    new Swiper(".amy1", {
      autoplay:false,
      loop : false,
      slidesPerView: 3.5
    })
  }
}

export default MySwiper
