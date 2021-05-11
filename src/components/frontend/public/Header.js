import React from "react";
import { Row, Col, Avatar, Image, Menu, Dropdown, Button } from "antd";
import cookies from "js-cookies";

const menu = (
  <Menu>
    <Menu.Item>
      <a rel="noopener noreferrer" href="/profile">
        Edit Profile
      </a>
    </Menu.Item>
    <Menu.Item>
      <a rel="noopener noreferrer" href="/mybook">
        My Books
      </a>
    </Menu.Item>
    <Menu.Item>
      <a rel="noopener noreferrer" href="/logout">
        Logout
      </a>
    </Menu.Item>
  </Menu>
);

const Header = () => {
  return (
    <Row gutter={16}>
      <Col align="left" span={12}>
        <Image
          as="a"
          href="/"
          className="logo"
          src="https://res.cloudinary.com/johnoblenda/image/upload/v1609210738/libroh/logo_lwyvsj.png"
        />
      </Col>
      <Col span={12} align="right" className="navigation">
        {!cookies.getItem("_user") ? (
          <>
            <Button as="a" compact href="/">
              <i class="fas fa-home"></i> Home
            </Button>
            <Button as="a" compact href="/donate">
              <i class="fas fa-envelope-open"></i> Donate a book
            </Button>
            <Button as="a" compact href="/login">
              <i class="fas fa-chevron-circle-right"></i> Login
            </Button>
            <Button as="a" compact href="/signup">
              <i class="fas fa-align-left"></i> Signup
            </Button>
          </>
        ) : (
          <>
            <Button as="a" compact href="/">
              <i class="fas fa-home"></i> Home
            </Button>
            <Dropdown overlay={menu}>
              <a
                href="#/"
                className="ant-dropdown-link"
                onClick={e => e.preventDefault()}
              >
                <Avatar src="//res.cloudinary.com/johnoblenda/image/upload/v1606186222/libroh/pngtree-user-vector-avatar-png-image_1541962_i43ejo.jpg" />
              </a>
            </Dropdown>
          </>
        )}
      </Col>
    </Row>
  );
};

export default Header;
