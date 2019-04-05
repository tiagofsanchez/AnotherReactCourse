import React from 'react';

import classe from './Person.module.css';

const person = ( props ) => {
    
    const { name , age , children , click , changeName } = props; 
   

    return (
        <div className={classe.Person} >
            <p onClick={click}> I'm {name} and I am {age} years old !!!</p>
            <p>{children} </p>  
            <input type="text" onChange={changeName} value={name}/> 
        </div>
    )
};

export default person;