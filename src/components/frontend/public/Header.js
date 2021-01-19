import React from "react";
import { Link } from "react-router-dom";
import { Button, Grid, Icon, Image, Dropdown } from "semantic-ui-react";

const trigger = (
    <span>
        <Image
            src="//res.cloudinary.com/johnoblenda/image/upload/v1606186222/libroh/pngtree-user-vector-avatar-png-image_1541962_i43ejo.jpg"
            avatar
        />{" "}
        Hello, Bob
    </span>
);

const options = [
    { key: "profile", text: "Edit Profile", icon: "user" },
    { key: "my-books", text: "My Books", icon: "bookmark" },
    {
        key: "sign-out",
        text: "Sign Out",
        icon: "user",
        as: Link,
        to: "/logout",
    },
];

const Header = () => {
    return (
        <Grid padded columns={2} className="header">
            <Grid.Row>
                <Grid.Column>
                    <Image src="//res.cloudinary.com/johnoblenda/image/upload/v1609210738/libroh/logo_lwyvsj.png" />
                </Grid.Column>
                <Grid.Column textAlign="right" verticalAlign="middle">
                    <Button as="a" compact href="/donate">
                        <Icon name="periscope" /> Donate a book
                    </Button>
                    <Button as="a" compact href="/login">
                        <Icon name="user" /> Login
                    </Button>
                    <Button as="a" compact href="/signup">
                        <Icon name="periscope" /> Signup
                    </Button>
                    <Dropdown
                        trigger={trigger}
                        options={options}
                        direction="left"
                    />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
};

export default Header;
