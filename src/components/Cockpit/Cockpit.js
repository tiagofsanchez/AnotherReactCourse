import React from 'react';


const Cockpit = (props) => {
    const {classes , btnClass , showing } = props;
    
    return (
        <div>
            <h1>Hi, I'm a React App</h1>
            <p className={classes.join(' ')}>This is really working!</p>
            <button
                className={btnClass}
                onClick={showing}>
                Show or Hide
            </button>
        </div>
    )
}

export default Cockpit;