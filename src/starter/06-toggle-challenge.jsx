import { useState } from "react";

const ToggleChallenge = () => {
  const [owner, setOwner] = useState({ name: 'bob', age: 32 });

  const Pet = () => {
    return (
      <>
        <h3>Fluffy the Cat</h3>
      </>
    );
  };

  const removeOwner = function () {
    setOwner();
  };


  return (
    <>
      <h2>toggle challenge</h2>
      {owner ? (
        <>
          <button className="btn" onClick={removeOwner}>remove owner</button>
          <h3>{owner.name}, aged {owner.age} is the owner of</h3>
        </>
      ) : <button className="btn" onClick={() => { setOwner({ name: 'bob', age: 32 }); }}>include owner</button>}
      <Pet />
    </>
  );
};

export default ToggleChallenge;
