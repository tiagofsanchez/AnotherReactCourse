import React from 'react'; 
import Person from './Person/Person';

const Persons = (props) => {
    
    const { persons , clicked , changed } = props;

    return (
    persons.map((item, index) => {
        return <Person
          click={() => clicked(index)}
          name={item.name}
          age={item.age}
          key={item.id}
          changeName={(event) => changed(event, item.id)}
        />
      }))
}

export default Persons;