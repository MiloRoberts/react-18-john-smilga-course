import data from './data.js';
import Person from './assets/Person.jsx';
import { useState } from 'react';

const App = () => {
  const [people, setPeople] = useState(data);

  const clearPeople = () => {
    setPeople([]);
  };

  return (
    <>
      <button className='btn' onClick={clearPeople}>Clear All</button>
      {people.map(({ id, name, age, image }) => {
        return (
          <Person key={id} name={name} age={age} image={image} />
        );
      })}
    </>
  );
};
export default App;
