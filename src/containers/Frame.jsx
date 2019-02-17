import React, { useState, useContext, Suspense } from "react";
import { Redirect } from "react-router-dom";
import { UserContext } from "tools/User";
import UserItem from "com/UserItem";
import Logo from "com/Logo";

const DocFrame = React.lazy(() => import('con/frames/DocFrame.jsx'));
const RegFrame = React.lazy(() => import('con/frames/RegFrame.jsx'));
const PhaFrame = React.lazy(() => import('con/frames/PhaFrame.jsx'));


function Frame(props) {
  // 菜单折叠
  let [collapsed, setCollapsed] = useState(true);
  // 登录授权
  let { auth: { user } } = useContext(UserContext);
  if (!user) return <Redirect to="/login" />;
  let { role } = user;
  function getForme(){
    switch(role.type){
      case 'doctor':
      return <DocFrame />;
      case 'cashier':
      return <RegFrame />;
      case 'pharmacist':
      return <PhaFrame />;
    }
  }
  return <Suspense fallback={<div>Loading...</div>}>
    {getForme()}
  </Suspense>
}



export default Frame;
