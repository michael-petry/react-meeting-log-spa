// Import React
import React, { Component } from 'react';
import Home from './Home';
import Navigation from './Navigation'
import Welcome from './Welcome'
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  
  constructor() {
    super();
    this.state = {
      user : 'John Doe'
    }
  }
  
  render() {
    return (
      <div>
        <Navigation user={this.state.user} />
        {this.state.user && (
        <Welcome user={this.state.user} />
        )}
        <Home user={this.state.user} />
      </div>
    );
  }
}

export default App;
