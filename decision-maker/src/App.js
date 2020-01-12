import React from 'react';
import Header from './components/Header'
import Decision from './components/Decision'
import Form from './components/Form'
import './App.css';

class App extends React.Component {
  state = {
    isClicked: false,
    options: [],


  }

  handleSubmission = (e) => {
    e.preventDefault()
    console.log('SHIIIIIIT HAPPENED')
  }

  render() {
    return (
      <div className='container App'>
        <Header />

        <Form handleSubmit={this.handleSubmission}/>

        <Decision />


      </div>
    )
  }
}

export default App;
