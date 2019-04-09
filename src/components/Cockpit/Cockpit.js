import React from 'react';
import classe from './Cockpit.module.css';

const Cockpit = (props) => {
    
    const { numberOfPersons , btnClassChange , showingPersons } = props;    
    
    const classes = [];
    if (numberOfPersons <= 2) {
      classes.push(classe.red);
    }
    if (numberOfPersons <= 1) {
      classes.push(classe.bold);
    }

    let btnClass = '';
    if(btnClassChange) {
        btnClass=classe.red
    }


    return (
        <div className={classe.Cockpit} >
            <h1>Hi, I'm a React App</h1>
            <p className={classes.join(' ')}>This is really working!</p>
            <button
                className={btnClass}
                onClick={showingPersons}>
                Show or Hide
            </button>
        </div>
    )
}

export default Cockpit;