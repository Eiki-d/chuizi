import React, {Component} from 'react'
import Navbar from "../../Components/Navbar/navbar"
import "./search.scss"
class Search extends Component {
  render(){
    return <div id="search">
      <div className="search-input-wrap">
        {/* <div className=""></div> */}
        <Navbar className="search-input-inline"/>
        <div className="cancel" onClick={()=>this.handleClick()}>
          取消
        </div>
      </div>
    </div>
  }
  handleClick(){
    this.props.history.push('/home')
  }
}

export default Search



