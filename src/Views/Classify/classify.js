import React, { Component } from 'react'
import {
    NavLink,
    Route,
    Redirect,
    Switch

} from 'react-router-dom'
import Navbar from '../../Components/Navbar/navbar'
import Classify_list from './Classify_list/classify_list'
import Axios from 'axios'
import store from '../../Redux/store'
import {getList, getListThunk} from '../../Redux/Actions/list'
import './classify.scss'

// class Classify extends Component {
//     state = {
//         datalist:[],
//         second: null,
//         id: ''
//     }

//     componentDidMount(){
//         // Axios({
//         //     url:'/mobile/classify'
//         // }).then(res=>
//         //     console.log(res.data.data)    
//         // )
//         if(store.getState().listReducer.length===0){
//             store.dispatch(getListThunk(()=>{
//                 // console.log("数据完事了",store.getState().listReducer)
//                 this.setState({
//                     datalist:store.getState().listReducer
//                 })
//             }))
//         }else{
//             // console.log("缓存")
//             this.setState({
//                 datalist:store.getState().listReducer
//             })
//         }
//     }
//     render(){
//         // console.log(this.state.second)
//         return <div className="Classify">
//             <div className="Navbar">
//                 <Navbar/>
//             </div>
            
//             <div className="category-container">
//                 <section className="left-wrap">
//                     <ul className="first-list">
//                         {
//                             this.state.datalist.map((item,index)=>  
//                                 <NavLink to={`/classify/classify_list/${localStorage.getItem('myid')}`} activeClassName="active" key={index} item={item} onClick={()=>this.handleClick(item.classifyId,item.second)}>
//                                         {/* <li key={index} onClick={()=>this.handleClick(item.classifyId,item.second)} item={item}> */}
//                                             <span>{item.classifyName}</span>
//                                         {/* </li> */}
//                                 </NavLink>
//                             )
//                         }
                        
//                     </ul>
//                 </section>
//                 <div className="right-wrap">
//                     {/* {
//                         console.log(this.state.second),
//                         this.state.second.map((item,index)=>  
//                             <Classify_list key={index} item={item}></Classify_list>
//                         )
//                     } */}
//                 </div>
//             </div>
//                 <Route path={`/classify/classify_list/${localStorage.getItem('myid')}`} component={Classify_list}/>
//                 {/* <Route path="/detail/:id" component={Detail} exact/> */}
//                 <Redirect from="/classify" to="/classify/classify_list/150" exact/>
//         </div>
//     }
//     handleClick = (id, second)=>{
//         console.log(id)
//         // console.log(second)
//         localStorage.setItem('myid',id)
//         var digitail_id = localStorage.getItem('myid')
//         // var second= this.state.datalist[i].second
//         for(var i=0; i<this.state.datalist.length; i++){
//             if(this.state.datalist[i]==digitail_id){
//                 return this.state.datalist[i].second;
//             }
//         }
//         this.setState({
//             second: second,
//             id: id
//         })
//         // console.log(this.state.second)
//     }
// }

// export default Classify



// import React, { Component } from 'react'
// import "./error.scss"

// class Login extends Component {
//     render(){
//         return <div>Error 404!!!</div>
//     }
// }

// export default Login

import { Menu, ActivityIndicator, NavBar } from 'antd-mobile';

const data = [
  {
    value: '1',
    label: 'Food',
    children: [
      {
        label: 'All Foods',
        value: '1',
        // disabled: false,
      },
      {
        label: 'Chinese Food',
        value: '2',
      }, {
        label: 'Hot Pot',
        value: '3',
      }, {
        label: 'Buffet',
        value: '4',
      }, {
        label: 'Fast Food',
        value: '5',
      }, {
        label: 'Snack',
        value: '6',
      }, {
        label: 'Bread',
        value: '7',
      }, {
        label: 'Fruit',
        value: '8',
      }, {
        label: 'Noodle',
        value: '9',
      }, {
        label: 'Leisure Food',
        value: '10',
      }],
  }, {
    value: '2',
    label: 'Supermarket',
    children: [
      {
        label: 'All Supermarkets',
        value: '1',
      }, {
        label: 'Supermarket',
        value: '2',
        // disabled: true,
      }, {
        label: 'C-Store',
        value: '3',
      }, {
        label: 'Personal Care',
        value: '4',
      }],
  }
];

class Error extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      initData: '',
      show: true,
      datalist: []
    };
  }
  onChange = (value) => {
    let label = '';
    data.forEach((dataItem) => {
      if (dataItem.value === value[0]) {
        label = dataItem.label;
        if (dataItem.children && value[1]) {
          dataItem.children.forEach((cItem) => {
            if (cItem.value === value[1]) {
              label += ` ${cItem.label}`;
            }
          });
        }
      }
    });
    // console.log(label);
  }

//   onMaskClick = () => {
//     this.setState({
//       show: false,
//     });
//   }
  componentWillMount(){
      this.setState({
          initData: data,
          //点击显示列表
      });

  }
  componentDidMount(){
    if(store.getState().listReducer.length===0){
        store.dispatch(getListThunk(()=>{
            // console.log("数据完事了",store.getState().listReducer)
            this.setState({
                datalist:store.getState().listReducer,
                show: this.state.show,
            })
        }))
    }else{
        // console.log("缓存")
        this.setState({
            datalist:store.getState().listReducer
        })
    }
 }
  render() {
      console.log(this.state.datalist)
    const { initData, show } = this.state;
    const menuEl = (
      <Menu
        className="foo-menu"
        data={initData}
        // value={['1', '3']}
        onChange={this.onChange}
        // height={document.documentElement.clientHeight * 0.6}
      />
    );
    const loadingEl = (
      <div style={{ width: '100%', height: document.documentElement.clientHeight * 0.6, display: 'flex', justifyContent: 'center' }}>
        <ActivityIndicator size="large" />
      </div>
    );
    return (
      <div className='menu-active'>
        <div>
        </div>
        {show ? initData ? menuEl : loadingEl : null}
        {show ? <div className="menu-mask" onClick={this.onMaskClick} /> : null}
      </div>
    );
  }
}

// ReactDOM.render(<MenuExample />, mountNode);

export default Error


