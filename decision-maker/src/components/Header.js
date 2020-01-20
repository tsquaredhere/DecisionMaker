import React from 'react';

class Header  extends React.Component {


  render() {
    return (
      <div className='App-header'>
        <h2>Tired of Thinking?</h2>
        <h1> Let Us Decide for You. </h1>
        <br></br>
        <div className="ui animated button" onClick={this.props.toggleClick} tabIndex="0">
            <div className="visible content" >Help Me</div>
            <div className="hidden content">
                Ok Fine.
            </div>
        </div>
    
      </div>
    )
  }
}

export default Header;