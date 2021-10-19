import React from 'react';
import useFirebase from "../../hooks/useFirebase";

const Join = () => {
  const { googleSignIn, users } = useFirebase();
  return (
    <div>
      <button onClick={googleSignIn}>google</button>
    </div>
  );
};

export default Join;