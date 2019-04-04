import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: "12", name: 'Max', age: 28 },
      { id: "321", name: 'Manu', age: 29 },
      { id: "1234", name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value'
  };

  /* In JS objects and arrays are reference type and you shouldn't be doing that */
  deletePersonHandler = (personIndex) => {
    /* const persons = this.state.persons.slipe();  this will be a good of state immutability*/
    const { persons } = this.state;
    const newPersons = [...persons]
    newPersons.splice(personIndex, 1);
    this.setState({
      persons: newPersons
    })
  }


  /* This really shows that the array and object are reference type and you need to copy them to keep imutability*/
  nameChangeHandler = (event, id) => {
    const { persons } = this.state;

    const personIndex = persons.findIndex(p => {
      return p.id === id;
    });

    const person = { ...persons[personIndex] };
    person.name = event.target.value;

    const newPersons = [...persons];
    newPersons[personIndex] = person;

    this.setState({
      persons: newPersons,
    })
  }

  tooglePersonsHandler = () => {
    this.setState({
      ...this.state,
      showpersons: !this.state.showpersons,
    })
    console.log(this.state)
  }

  render() {
    
    const style = {
      backgroundColor: "green",
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showpersons) {
      persons = (
        <div>
          {this.state.persons.map((item, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={item.name}
              age={item.age}
              key={item.id}
              changeName={(event) => this.nameChangeHandler(event, item.id)}
            />
          })}
        </div>
      )
      style.backgroundColor= "red";
    }

    const classes = []
    


    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes}>This is really working!</p>
        <button
          style={style}
          onClick={this.tooglePersonsHandler}>Show or Hide
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
