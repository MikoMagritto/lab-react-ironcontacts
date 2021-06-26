import React from 'react';
import './App.css';
import contacts from './contacts.json';

class App extends React.Component {



  render() {
    return (
      <div className="App" >
        <h1>{this.contacts}</h1>
      </div>
    );
  }
}

export default App;