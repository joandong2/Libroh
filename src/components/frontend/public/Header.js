import React from "react";
import { Link } from "react-router-dom";
import { Icon, Image, Dropdown } from "semantic-ui-react";
import { Row, Col, Button } from "antd";
import cookies from "js-cookies";

const trigger = (
  <span>
    <Image
      src="//res.cloudinary.com/johnoblenda/image/upload/v1606186222/libroh/pngtree-user-vector-avatar-png-image_1541962_i43ejo.jpg"
      avatar
    />{" "}
  </span>
);

const options = [
  {
    key: "profile",
    text: "Edit Profile",
    icon: "user",
    as: Link,
    to: "/profile"
  },
  {
    key: "my-books",
    text: "My Books",
    icon: "bookmark",
    as: Link,
    to: "/mybook"
  },
  {
    key: "sign-out",
    text: "Sign Out",
    icon: "user",
    as: Link,
    to: "/logout"
  }
];

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
              <Icon name="home" /> Home
            </Button>
            <Dropdown trigger={trigger} options={options} direction="left" />
          </>
        )}
      </Col>
    </Row>
  );
};

export default Header;
