import React from 'react';
import '../App.css';

class Form extends React.Component {


  render() {
    return (
        <div className="ui inverted segment">
            <form className=" ui decision form" onSubmit={this.props.handleSubmit}> 
                <div className='input'>
                    <label>What's the Decision?</label>
                    <input type="text" name="decision" placeholder="Decision"/>
                </div>

                <div className='input'>
                    <label className="label">Last Name</label>
                    <input type="text" name="last-name" placeholder="Last Name"/>
                </div>
                
                    <button className="ui mini inverted teal button">Submit</button>
                
            </form>
        </div>

    )
  }
}

export default Form;