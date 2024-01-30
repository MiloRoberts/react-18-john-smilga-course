import { data } from '../data.js';
import { useState } from 'react';

const UseStateArray = () => {

  const [people, setPeople] = useState(data);

  const removeAll = () => {
    setPeople([]);
  };

  const removeThis = (id) => {
    setPeople(people.filter((person) => {
      return person.id !== id;
    }));
  };

  return (
    <>
      {people.map(({ id, name }) => {
        return (
          <div key={id}>
            <h2>{name}</h2>
            <button onClick={() => { removeThis(id); }}>remove {name}</button>
          </div>
        );
      })}
      <br />
      <button className='btn' onClick={removeAll}>click me</button>
    </>
  );
};

export default UseStateArray;
