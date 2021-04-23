import React from "react";
import { Link } from "react-router-dom";
import { Button, Grid, Icon, Image, Dropdown } from "semantic-ui-react";
import { Row, Col } from "antd";
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
      <Col span={12} align="right">
        {!cookies.getItem("_user") ? (
          <>
            <Button as="a" compact href="/">
              <Icon name="home" /> Home
            </Button>
            <Button as="a" compact href="/donate">
              <Icon name="periscope" /> Donate a book
            </Button>
            <Button as="a" compact href="/login">
              <Icon name="user" /> Login
            </Button>
            <Button as="a" compact href="/signup">
              <Icon name="periscope" /> Signup
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
