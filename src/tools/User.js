import React, { useState } from "react";

// 从storage里获取授权信息
function getAuthFromLocal() {
  let auth = localStorage.getItem("auth");
  return auth ? JSON.parse(auth) : {};
}
export let UserContext = React.createContext();

export function UserProvider(props) {
  let [auth, setAuth] = useState(getAuthFromLocal());
  function setAuthToLocal(data) {
    setAuth(data);
    localStorage.setItem("auth", JSON.stringify(data));
  }
  return (
    <UserContext.Provider value={{ setAuth: setAuthToLocal, auth }}>
      {props.children}
    </UserContext.Provider>
  );
}
