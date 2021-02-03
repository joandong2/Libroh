import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { Button, Form, Grid, Icon, Image, Message } from "semantic-ui-react";
import { userSignup } from "../../../redux/actions/users";

import Header from "../public/Header";
import Footer from "../public/Footer";

const Login = (props) => {
    const { register, handleSubmit, errors, watch } = useForm();
    const notifications = useSelector((state) => state.notifications);
    const dispatch = useDispatch();

    const onSubmit = (data) => dispatch(userSignup(data));

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
                        {notifications.loading && (
                            <div className="loader"></div>
                        )}
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
                                    name="name"
                                    placeholder="Name"
                                    ref={register({
                                        required: "Name is required.",
                                        minLength: {
                                            value: 8,
                                            message:
                                                "Name must be minimum of 8 characters.",
                                        },
                                    })}
                                />
                                <i aria-hidden="true" className="user icon"></i>
                            </div>
                            {errors.name && (
                                <p className="errors">
                                    <Icon name="arrow circle right" />{" "}
                                    {errors.name.message}
                                </p>
                            )}
                        </div>
                        <div className="field">
                            <div className="ui fluid left icon input">
                                <input
                                    name="phone"
                                    placeholder="Phone Number"
                                    ref={register({
                                        required: "Phone Number is required.",
                                        minLength: {
                                            value: 8,
                                            pattern: {
                                                value: /[0-9]*/i,
                                                message:
                                                    "Invalid phone number.",
                                            },
                                            message:
                                                "Phone Number must be minimum of 8 characters.",
                                        },
                                    })}
                                />
                                <i
                                    aria-hidden="true"
                                    className="phone icon"
                                ></i>
                            </div>
                            {errors.phone && (
                                <p className="errors">
                                    <Icon name="arrow circle right" />{" "}
                                    {errors.phone.message}
                                </p>
                            )}
                        </div>
                        <div className="field">
                            <div className="ui fluid left icon input">
                                <input
                                    name="address"
                                    placeholder="Address"
                                    ref={register({
                                        required: "Address is required.",
                                        minLength: {
                                            value: 8,
                                            message:
                                                "Address must be minimum of 8 characters.",
                                        },
                                    })}
                                />
                                <i aria-hidden="true" className="home icon"></i>
                            </div>
                            {errors.address && (
                                <p className="errors">
                                    <Icon name="arrow circle right" />{" "}
                                    {errors.address.message}
                                </p>
                            )}
                        </div>
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
                                <i aria-hidden="true" className="mail icon"></i>
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
                        <div className="field">
                            <div className="ui fluid left icon input">
                                <input
                                    name="confirm_password"
                                    type="password"
                                    placeholder="Confirm Password"
                                    ref={register({
                                        required:
                                            "Confirm Password is required.",
                                        minLength: {
                                            value: 8,
                                            message:
                                                "Confirm Password must be minimum of 8 characters.",
                                        },
                                        validate: (value) =>
                                            value === watch("password") ||
                                            "Passwords don't match.",
                                    })}
                                />
                                <i aria-hidden="true" className="lock icon"></i>
                            </div>
                            {errors.confirm_password && (
                                <p className="errors">
                                    <Icon name="arrow circle right" />{" "}
                                    {errors.confirm_password.message}
                                </p>
                            )}
                        </div>

                        <Button fluid size="small">
                            Signup
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
