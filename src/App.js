import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: "Ygor", age: 25 },
      { name: "John", age: 26 },
      { name: "Max", age: 28}
    ]
  }

  switchNameHandler = (newName) => {
    //console.log('Was clicked!');
    this.setState({
      persons: [
        { name: newName, age: 25 },
        { name: "John", age: 26 },
        { name: "Maximilian", age: 28}
      ]
    });
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: "Ygor", age: 25 },
        { name: event.target.value, age: 26 },
        { name: "Maximilian", age: 28}
      ]
    });
  }
  
  render() {
    return (
      <div className="App">
        <h1>Hello ReactJs</h1>
        <button onClick={() => this.switchNameHandler('Ygor Alcantara')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this, 'Ygor!')}/>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          changed={this.nameChangedHandler}>
            My Hobies: Racing
        </Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}/>
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hello ReactJs'));
  }
}

export default App;
