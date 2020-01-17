import React, { Component } from 'react';

class DetailNav extends Component {
  render() {
    return (
      <div className="detailNav">
        <div className="detailbar">
            {this.props.children}
        </div> 
    </div>
    );
  }

}

export default DetailNav;

