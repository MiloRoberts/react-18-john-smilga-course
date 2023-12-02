const ErrorExample = () => {
  let counter = 0;
  const incrementCounter = () => {
    counter++;
    document.getElementById('counter-value').innerHTML = counter;
    console.log(counter);
  };
  return (
    <>
      <h2>useState error example</h2>
      <h3 id="counter-value">0</h3>
      <button onClick={() => { incrementCounter(); }}>click me</button>
    </>
  );
};

export default ErrorExample;
