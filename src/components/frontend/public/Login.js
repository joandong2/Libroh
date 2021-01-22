import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { Button, Form, Grid, Icon, Image, Message } from "semantic-ui-react";
import { userLogin } from "../../../redux/actions/users";

import Footer from "./Footer";

const Login = (props) => {
    const { register, handleSubmit, errors } = useForm();
    const notifications = useSelector((state) => state.notifications);
    const dispatch = useDispatch();
    const onSubmit = (data) => dispatch(userLogin(data));

    return (
        <>
            <Grid
                textAlign="center"
                style={{ height: "80vh" }}
                verticalAlign="middle"
            >
                <Grid.Column style={{ maxWidth: 450 }}>
                    <p align="center">
                        <Image src="//res.cloudinary.com/johnoblenda/image/upload/v1609210738/libroh/logo_lwyvsj.png" />
                    </p>
                    {notifications.loading && <div className="loader"></div>}

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
                                            message: "Invalid email address.",
                                        },
                                    })}
                                />
                                <i aria-hidden="true" className="user icon"></i>
                            </div>
                            {errors.email && (
                                <p className="errors">
                                    <Icon name="arrow circle right" />{" "}
                                    {errors.email.message}
                                </p>
                            )}
                        </div>

                        <div className="field">
                            <div className="ui fluid left icon input">
                                <input
                                    name="password"
                                    type="password"
                                    placeholder="Password"
                                    ref={register({
                                        required: "Password is required.",
                                        minLength: {
                                            value: 8,
                                            message:
                                                "Password must be minimum of 8 characters.",
                                        },
                                    })}
                                />
                                <i aria-hidden="true" className="lock icon"></i>
                            </div>
                            {errors.password && (
                                <p className="errors">
                                    <Icon name="arrow circle right" />{" "}
                                    {errors.password.message}
                                </p>
                            )}
                        </div>

                        <Button fluid size="small">
                            Login
                        </Button>
                    </Form>
                    <p className="margin0" align="left">
                        <a href="/forget">Forgot Password</a>
                    </p>
                    <p align="left">
                        Need account? <a href="/signup">Sign Up</a>
                    </p>
                </Grid.Column>
            </Grid>
            <Footer />
        </>
    );
};

export default Login;
