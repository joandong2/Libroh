import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { Button, Form, Grid, Icon, Image, Message } from "semantic-ui-react";
import { forgetPassword } from "../../../redux/actions/users";

import Header from "../public/Header";
import Footer from "../public/Footer";

const Login = props => {
  const { register, handleSubmit, errors } = useForm();
  const notifications = useSelector(state => state.notifications);
  const dispatch = useDispatch();
  const onSubmit = data => dispatch(forgetPassword(data));

  return (
    <>
      <Header />
      <Grid
        textAlign="center"
        style={{ height: "70vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <p align="center">
            <Image src="//res.cloudinary.com/johnoblenda/image/upload/v1609210738/libroh/logo_lwyvsj.png" />
          </p>
          <div className="loader-wrapper" align="center">
            {notifications.loading && <div className="loader"></div>}
          </div>

          {notifications.message && (
            <Message color="red" size="small">
              {notifications.message}
            </Message>
          )}

          <Form size="large" onSubmit={handleSubmit(onSubmit)}>
            <div className="field">
              <div className="ui fluid left icon input">
                <input
                  name="email"
                  placeholder="Email address"
                  ref={register({
                    required: "Email address is required.",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address."
                    }
                  })}
                />
                <i aria-hidden="true" className="user icon"></i>
              </div>
              {errors.email && (
                <p className="errors">
                  <Icon name="arrow circle right" /> {errors.email.message}
                </p>
              )}
            </div>

            <Button fluid size="small">
              Submit
            </Button>
          </Form>
          <p align="left">
            Have account? <a href="/login">Login</a>
          </p>
        </Grid.Column>
      </Grid>
      <Footer />
    </>
  );
};

export default Login;
