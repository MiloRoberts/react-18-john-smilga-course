import { useState } from 'react';

const UseStateObject = () => {
  const [{ name, age, hobby }, setPerson] = useState({ name: 'Peter', age: 24, hobby: 'Reading Books' });

  // const [name, setName] = useState('Peter');
  // const [age, setAge] = useState(24);
  // const [hobby, setHobby] = useState('Reading Books');

  const handleClick = () => {
    setPerson({ name: 'John', age: 28, hobby: 'Screaming at the Computer' });
  };

  // const handleClick = () => {
  //   setName('John');
  //   setAge(28);
  //   setHobby('Screaming at the Computer');
  // };

  return (
    <>
      <h2>useState object example</h2>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>Enjoys: {hobby}</h3>
      <button type='button' className='btn' onClick={handleClick}>Show John</button>
    </>
  );
};

export default UseStateObject;
