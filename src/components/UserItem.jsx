import React, { useContext } from "react";
import { Popover, Avatar, Button, Modal } from "antd";
import styled from "styled-components";
import { UserContext } from "tools/User";
const UserMenu = styled.div`
  color: rgba(255, 255, 255, 0.65);
  text-align: center;
  padding: 10px 0;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  cursor: pointer;
  & > .userContent {
    transition: height 0.3s;
    height: 0px;
    overflow: hidden;
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
  &:hover > .userContent {
    height: 60px;
  }
`;

const UserContent = styled.div`
  & > span {
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin: 5px 0;
  }
`;

function UserItem(props) {
  // 登录授权
  let {
    auth: { user },
    setAuth
  } = useContext(UserContext);
  console.log(user);
  return (
    <UserMenu>
      <Avatar style={{ backgroundColor: "#4285f4" }} size="large" icon="user" />
      <UserContent className="userContent">
        <span>{user.name}</span>
        <Button
          ghost
          size="small"
          onClick={e => {
            Modal.confirm({
              title: "注意",
              content: "确定要注销吗?",
              onOk() {
                setAuth({});
              },
              onCancel() {}
            });
          }}
        >
          退出
        </Button>
      </UserContent>
    </UserMenu>
  );
}
export default UserItem;
