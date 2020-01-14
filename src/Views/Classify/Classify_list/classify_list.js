import React, { Component } from 'react'
import Axios from 'axios'
import "./classify_list.scss"
import {withRouter} from 'react-router'
// import Classify from '../classify'

class Classify_list extends Component {
    render() {
        // console.log(this.state.datalist)
        // let {item} = this.props
        console.log(this.props)
        return (
            <div className="classify_digital">
                <div className="classify_digital_list">
                    {
                        item.map(item=>
                            // console.log(item),
                            <li>
                                <div>
                                    {/* <img src={item.}/> */}
                                    <span>{item.classifyName}</span>
                                </div>
                            </li>
                        )
                    }
                </div>
            </div>
        )
    }
}

export default withRouter(Classify_list)
