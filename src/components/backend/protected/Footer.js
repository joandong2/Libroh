import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { useForm } from "react-hook-form";
import { Grid, List } from "semantic-ui-react";

// import Header from "../public/Header";
// import Footer from "../public/Footer";

const Footer = props => {
  //const { register, handleSubmit, errors } = useForm();
  //const notifications = useSelector((state) => state.notifications);
  //const dispatch = useDispatch();
  //const onSubmit = (data) => dispatch(userLogin(data));

  return (
    <>
      <Grid padded className="footer">
        <Grid container>
          <Grid.Row columns={2}>
            <Grid.Column align="left" className="left-panel" width={8}>
              <p>Copyright © 2021 Libroh. All rights reserved.</p>
            </Grid.Column>
            <Grid.Column align="right" width={8}>
              <List horizontal bulleted>
                <List.Item as="a">Documentation</List.Item>
                <List.Item as="a">License</List.Item>
                <List.Item as="a">Source Code</List.Item>
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Grid>
    </>
  );
};

export default Footer;
