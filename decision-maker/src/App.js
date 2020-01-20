import React from 'react';
import Header from './components/Header'
import Decision from './components/Decision'
import Form from './containers/Form'
import './App.css';
// import {CSSTransition, TransitionGroup} from 'react-transition-group';

class App extends React.Component {
  state = {
    isClicked: false,
    decision: "",
    options: [{title: "", description: "", weight: 0}],
    decided: null,
  }

  onComponentDidMount = () => {
    this.setState = {
      isClicked: false,
      decision: "",
      options: [{title: "", description: "", weight: null}],
      decided: null,
      weightLeft: 10
    }
  }

  handleSubmission = (e) => {
    e.preventDefault()
    console.log('Submitted')
  }

  handleChange = (e) => {
    console.log(e.target.value, e.target.name)
    if (["title", "description", "weight"].includes(e.target.className)) {
      let options = [...this.state.options]
      options[e.target.dataset.id][e.target.className] = e.target.value
      this.setState({ options }, () => console.log(this.state.options))
    } else {
      this.setState({ [e.target.name]: e.target.value}, () => console.log(this.state.decision))
    }
  }

  addChoice =(e) => {
    this.setState((prevState) => ({
      options: [...prevState.options, {title: "", description: "", weight: null}]
    }))
  }

  toggleClickHandler = () => {
    console.log("toggling")
    this.setState((prevState) => ({
      isClicked: !prevState.isClicked
    }))
  }

  calculateWeightLeft = (e) => {
    console.log(e.target.value)
    let rem = this.state.weightLeft - e.target.value
    if (rem <= 10 ) {
      this.setState((prevState) => ({
        weightLeft: rem
      }))
    } else {
      console.log('error no weight left. ')
    }
  }

  deleteChoiceHandler = (obj) => {
    this.setState((prevState) => {
      return ({
        options: prevState.options.filter(function(item) {
          return item !== obj
      })
      
      })
    })
  }

  
 //use higher order component here to decide what to display
  render() {
    let {isClicked, decision, options, decided} = this.state
    return (

      <div className='container App'>
      
        {!isClicked? <Header toggleClick={this.toggleClickHandler}/> :
        

        <Form 
          options={options} 
          decision={decision} 
          addChoice={this.addChoice} 
          handleChange={this.handleChange} 
          handleSubmit={this.handleSubmission}
          deleteChoice={this.deleteChoiceHandler}
          />
        }
        <Decision decision={decision} decided={decided} options={options}/>
    

      </div>
 
    )
  }
}

export default App;
