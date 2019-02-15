import React, { useState } from "react";

export let UserContext = React.createContext();

export function UserProvider(props) {
  let [auth, setAuth] = useState({});
  return (
    <UserContext.Provider value={{ setAuth, auth }}>
      {props.children}
    </UserContext.Provider>
  );
}
