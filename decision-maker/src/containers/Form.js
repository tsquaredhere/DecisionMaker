import React from 'react';
import '../App.css';
import OptionInputs from '../components/OptionInputs.js'


class Form extends React.Component {


  render() {
    let { options, decision, addChoice, handleChange, handleSubmit, deleteChoice } = this.props
    return (
        <div className="ui inverted segment">
        <div className="ui grid">
            <div className="row centered" >
                <div className= 'column ten wide'>
                    <form className=" ui decision form" onSubmit={handleSubmit}> 
                        <div className='custom'>
                            <label htmlFor='decision'>What's the Decision?</label>
                            <input type="text" name="decision" value={decision} onChange={handleChange} placeholder="Your Question Here"/>
                        </div>
                 

                        <OptionInputs options={options} handleChange={handleChange} deleteChoice={deleteChoice}/>
                        
                        <div className='custom'>
                            <button type='button'className="ui mini inverted teal button" onClick={addChoice}>Add Choice </button>
                            <input type='submit' className="ui mini inverted teal button" value='Submit'/>
                        </div>
                        
                        
                    </form>
                </div>
                </div>
            </div>
        </div>

    )
  }
}

export default Form;