import React, { Component } from 'react';
import logo from './pokelogo2.png';
import './App.css';
import Button from 'react-bootstrap/lib/Button';
import Col from 'react-bootstrap/lib/Col';

// class PokemonForm extends React.Component {

//   constructor(props){
//     super(props);
//     this.state = {value: ''};

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
// }

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Find your favorite pokemon!</h1>
        </header>
        <div className="search">
          <Col xs={12} md={12}>

            <form className="App-form">

              <Col xs={12} mdOffset={3} md={6}>
                <input type="text" className="App-input" placeholder="Tell me it the name!" />
              </Col>

            </form>
          </Col>
          <Button bsStyle="primary" className="btn-busca">Search!</Button>
        </div>

      </div>
    );
  }
}

export default App;
