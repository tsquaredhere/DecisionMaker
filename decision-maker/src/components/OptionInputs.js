import React from 'react';

const OptionsInput = ({ options, handleChange, deleteChoice }) => {

    return (
        options.map((val, i) => {
            let num= i+1
            let optionTitleId=`title-${i}`, optionDescriptionId=`description-${i}`, weightId=`weight-${i}`
            return (
                <div key={val+i} className='choice-wrapper'>
                    <div className='row'  > 
                        <div className='column'>
                            <label htmlFor={optionTitleId}> {`Option #${num} `} </label>
                            <input
                                onChange={handleChange}
                                type='text'
                                name={optionTitleId}
                                data-id={i}
                                id={optionTitleId}
                                value={options[i].title}
                                className='title'
                            />

                            <label htmlFor={optionDescriptionId}> {`Description #${num} `} </label>
                            <input
                                onChange={handleChange}
                                type='text'
                                name={optionDescriptionId}
                                data-id={i}
                                id={optionDescriptionId}
                                value={options[i].description}
                                className='description'
                            />
                            <br></br>
                            
                            <div className='num-div'> 
                                <label htmlFor={weightId}> 
                                <p> {`How badly do you want option #${num}?`  } ({`Total sum of weights must equal 10`}) </p>
                                </label>
                                <input
                                    onChange={handleChange}
                                    type='text'
                                    name={weightId}
                                    data-id={i}
                                    id={weightId}
                                    value={options[i].weight}
                                    className='weight'
                                /><label htmlFor={weightId}> {`/10`} </label> <br></br>
                            </div>
                        </div>
                        <div className='column-delete'>
                            <button type='button' data-id ={i}className="ui mini inverted teal button" onClick={deleteChoice}>Delete Choice </button>
                        </div>
                    </div>
                </div>
            )
        })
    )
}

export default OptionsInput;