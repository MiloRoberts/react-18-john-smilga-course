const ErrorExample = () => {
  let count = 0;
  const increment = () => {
    const countElement = document.querySelector('#count');
    count += 1;
    console.log(count);
    countElement.innerHTML = count;
  };

  return (
    <>
      <h2 id="count">{count}</h2>
      <button onClick={increment}>increment</button>
    </>
  );
};

export default ErrorExample;
