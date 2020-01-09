import React, {Component} from 'react';
// import logo from './logo.svg';
// import './App.css';
import Tabbar from './Components/Tabbar/tabbar';

class App extends Component {
  render(){
    return <div>
        {this.props.children}
        <Tabbar/>
      </div>
  }
}

export default App;
