import React, { Component } from 'react';
import logo from './pokelogo2.png';
import './App.css';
import Button from 'react-bootstrap/lib/Button';
import Col from 'react-bootstrap/lib/Col';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { searchName: "", pokemon: null };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Find your favorite pokemon!</h1>
        </header>
        <div className="search">
          <form id="search" className="App-form" onSubmit={this.handleSubmit}>
          <Col xs={12} md={12}>
              <Col xs={12} mdOffset={3} md={6}>
                <input
                  type="text"
                  className="App-input"
                  placeholder="Tell me it the name!"
                  onChange={this.handleChange}
                  value={this.state.searchName}
                />
              </Col>
              </Col>
            <Button
              type="submit"
              form="search"
              bsStyle="primary"
              className="btn-busca"
            >
              Search!
            </Button>
            </form>
        </div>
      </div>
    );
  }
}

export default App;
