import React, { Component } from 'react';
import Header from './components/Header';
import Contact from './components/Contact';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Contact Manager" />
        <div className="container">
          <Contact name="John Smith" email="johnsth@gmail.com" phone="(21) 98765-4321"/>
        </div>
      </div>
    );
  }
}

export default App;
