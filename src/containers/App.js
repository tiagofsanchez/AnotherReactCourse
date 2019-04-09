import React, { Component } from 'react';
import classe from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  state = {
    persons: [
      { id: "12", name: 'Max', age: 28 },
      { id: "321", name: 'Manu', age: 29 },
      { id: "1234", name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value', 
    showingPersons: false,
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
    
    let persons = null;
    if (this.state.showpersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangeHandler} />
        </div>
      )
    }

    return (
      <div className={classe.App}>
        <Cockpit
          numberOfPersons={this.state.persons.length}
          btnClassChange={this.state.showpersons}
          showingPersons={this.tooglePersonsHandler}
        />
        {persons}
      </div>
    );
  }
}

export default App;
