import { useState } from 'react';

const UseStateGotcha = () => {

  const [value, setValue] = useState(0);

  const handleClick = () => {
    console.log('clicked the button');
    setTimeout(() => {
      setValue((currentState) => {
        return currentState + 1;
      });
    }, 3000);
  };

  // const addOne = function () {
  //   setValue(value + 1);
  //   console.log(value);
  // };

  // const handleClick = () => {
  //   setValue((currentState) => {
  //     const newState = currentState + 1;
  //     return newState;
  //   });
  // };

  return (
    <>
      <h2>{value}</h2>
      {/* <button className="btn" onClick={addOne}>use old value</button>
      <br /> */}
      <button className="btn" onClick={handleClick}>use new value</button>
    </>
  );
};

export default UseStateGotcha;
