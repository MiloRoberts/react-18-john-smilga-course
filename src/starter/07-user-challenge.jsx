import { useState } from "react";

const UserChallenge = () => {
  const [user, setUser] = useState(null);
  const toggleLogin = function () {
    user ? setUser(null) : setUser({ name: 'bob' });
  };
  return (
    <>
      {user ? (
        <>
          <h4>hello there, {user.name}</h4>
          <button onClick={toggleLogin} className="btn">logout</button>
        </>
      ) : (
        <>
          <h4>please log in</h4>
          <button onClick={toggleLogin} className="btn">login</button>
        </>
      )}
    </>
  );
};

export default UserChallenge;
