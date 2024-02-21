import { useState } from 'react';

const ShortCircuitOverview = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(24);

  // if (name) {
  //   return name && 'nameless';
  // }

  if (name) {
    return "nameless" || name;
  }

  const codeExample = name || "no name";

  return (
    <>
      <h2>short circuit overview</h2>
      <h4>Falsy OR: {name || "nameless"}</h4>
      <h4>Falsy AND: {name && "nameless"}</h4>
      <h4>Truthy OR: {age || "ageless"}</h4>
      <h4>Truthy AND: {age && "ageless"}</h4>
      {codeExample}
    </>
  );
};
export default ShortCircuitOverview;
