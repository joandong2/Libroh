import React from "react";
import { Grid, List } from "semantic-ui-react";

const Footer = () => {
    return (
        <Grid textAlign="center">
            <List divided horizontal>
                <List.Item>&copy; Libroh 2021</List.Item>
                <List.Item as="a">Privacy and Policy</List.Item>
            </List>
        </Grid>
    );
};

export default Footer;
