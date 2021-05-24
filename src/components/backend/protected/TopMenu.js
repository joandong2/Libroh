import React, { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { useForm } from "react-hook-form";
import { Menu, Image } from "antd";

// import Header from "../public/Header";
// import Footer from "../public/Footer";

const TopMenu = props => {
  const [current, setCurrent] = useState("mail");
  const { SubMenu } = Menu;

  const handleClick = e => {
    setCurrent(e.key);
  };

  return (
    <>
      <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
        <Menu.Item key="home">
          <Image
            preview={false}
            src="//res.cloudinary.com/johnoblenda/image/upload/v1609210738/libroh/logo_lwyvsj.png"
            height="40"
            width="40"
          />
        </Menu.Item>
        <Menu.Item key="books">
          <i class="fas fa-book"></i> Books
        </Menu.Item>
        <Menu.Item key="authors">
          <i class="fas fa-user"></i> Authors
        </Menu.Item>
        <SubMenu
          key="publishers"
          title=" Publishers"
          icon={<i class="fas fa-users-cog"></i>}
        >
          <Menu.Item key="publisher:1">Option 1</Menu.Item>
          <Menu.Item key="publisher:2">Option 2</Menu.Item>
        </SubMenu>
        <SubMenu
          key="settings"
          title=" Settings"
          icon={<i class="fas fa-tools"></i>}
        >
          <Menu.Item key="setting:1">Option 1</Menu.Item>
          <Menu.Item key="setting:2">Option 2</Menu.Item>
        </SubMenu>
      </Menu>
    </>
  );
};

export default TopMenu;
