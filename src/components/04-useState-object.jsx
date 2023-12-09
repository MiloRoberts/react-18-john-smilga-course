import { useState } from 'react';

// set up 3 state values:
// name (string)
// age (number)
// hobby (string)

// render in the browser
// create a button
// set up a function that updates all three state values
// as a result, once the user clicks the button, a different person is displayed in the browser

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'peter',
    age: 24,
    hobby: 'reading books'
  });

  const displayPerson = () => {
    // setPerson({
    //   name: 'john',
    //   age: 28,
    //   hobby: 'scream at the computer'
    // });
    setPerson({ ...person, name: 'susan' });
  };

  return <>
    <h4>{person.name}</h4>
    <h4>{person.age}</h4>
    <h4>Enjoys: {person.hobby}</h4>
    <button className='btn' onClick={displayPerson}>
      show John
    </button>
  </>;
};

export default UseStateObject;
