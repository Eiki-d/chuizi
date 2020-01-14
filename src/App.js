import React, {Component} from 'react';
// import logo from './logo.svg';
// import './App.css';
import Tabbar from './Components/Tabbar/tabbar';
import store from './Redux/store';

class App extends Component {
  state = {
    isShow:true
  }
  UNSAFE_componentWillMount() {
    store.subscribe(()=>{
      // console.log("状态有修改",store.getState())
      this.setState({
        isShow:store.getState().tabbarReducer.isShow
      })
    })
  }
  render(){
    return <div>
        {this.props.children}
        {
        this.state.isShow?
        <Tabbar/>:null
      }
      </div>
  }
}

export default App;
