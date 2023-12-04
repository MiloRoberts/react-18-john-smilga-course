import { useState } from "react";
import { data } from '../data.js';

const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  const removePerson = (id) => {
    // const filteredPeople = people.filter((person) => {
    //   return person.id !== id;
    // });
    // setPeople(filteredPeople);
    setPeople(people.filter((person) => person.id !== id));
  };

  const removePeople = () => {
    setPeople([]);
  };

  return (
    <>
      {people.map(({ id, name }) => {
        return <div key={id}>
          <h4>{name}</h4>
          <button onClick={() => { removePerson(id); }}>remove</button>
        </div>;
      })}
      <button className="btn" onClick={() => { removePeople(); }}>Clear Items</button>
    </>
  );
};

export default UseStateArray;