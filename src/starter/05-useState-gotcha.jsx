import { useState } from 'react';

const UseStateGotcha = () => {

  const [someValue, setValue] = useState(0);

  // const handleClick = function () {
  //   setValue((currentState) => {
  //     const newState = currentState + 1;
  //     console.log(newState);
  //     return newState;
  //   });
  // };

  const handleClick = () => {
    setTimeout(() => {
      console.log('clicked');
      setValue((currentState) => {
        return currentState + 1;
      });
    }, 3000);
  };

  return (
    <>
      <h2>useState "gotcha"</h2>
      <h3>{someValue}</h3>
      <button onClick={handleClick}>increase</button>
    </>
  );
};

export default UseStateGotcha;
