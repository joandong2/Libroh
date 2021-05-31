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
        <Menu.Item key="home">Libroh</Menu.Item>
        <Menu.Item key="dashboard">
          <i class="fas fa-border-all"></i>{" "}
          <a href="/admin/dashboard" rel="noopener noreferrer">
            Dashboard
          </a>
        </Menu.Item>
        <SubMenu key="books" title=" Books" icon={<i class="fas fa-book"></i>}>
          <Menu.Item key="books:1">
            <i class="fas fa-book"></i>{" "}
            <a href="/admin/books" rel="noopener noreferrer">
              All Books
            </a>
          </Menu.Item>
          <Menu.Item key="books:2">
            <i class="fas fa-plus-circle"></i>{" "}
            <a href="/admin/books/add" rel="noopener noreferrer">
              Add New Book
            </a>
          </Menu.Item>
          <Menu.Item key="books:3">
            <i class="fas fa-coins"></i>{" "}
            <a href="/admin/books/categories" rel="noopener noreferrer">
              Categories
            </a>
          </Menu.Item>
        </SubMenu>
        <SubMenu
          key="authors"
          title=" Authors"
          icon={<i class="fas fa-user-friends"></i>}
        >
          <Menu.Item key="author:1">
            <i class="fas fa-user-friends"></i>{" "}
            <a href="/admin/authors" rel="noopener noreferrer">
              All Authors
            </a>
          </Menu.Item>
          <Menu.Item key="author:2">
            <i class="fas fa-plus-circle"></i>{" "}
            <a href="/admin/authors/add" rel="noopener noreferrer">
              Add New Author
            </a>
          </Menu.Item>
        </SubMenu>
        <SubMenu
          key="publishers"
          title=" Publishers"
          icon={<i class="fas fa-user-friends"></i>}
        >
          <Menu.Item key="publisher:1">
            <i class="fas fa-user-friends"></i>{" "}
            <a href="/admin/publishers" rel="noopener noreferrer">
              All Publisher
            </a>
          </Menu.Item>
          <Menu.Item key="publisher:2">
            <i class="fas fa-plus-circle"></i>{" "}
            <a href="/admin/publishers/add" rel="noopener noreferrer">
              Add New Publisher
            </a>
          </Menu.Item>
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
