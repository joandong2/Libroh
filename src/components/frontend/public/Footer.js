import React from "react";
import { Grid, List } from "semantic-ui-react";

const Footer = () => {
    return (
        <Grid textAlign="center">
            <List divided horizontal>
                <List.Item>&copy; Libroh</List.Item>
                <List.Item as="a">Privacy and Policy</List.Item>
            </List>
        </Grid>
    );
};

export default Footer;
