import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { Button, Form, Grid, Icon, Image, Message } from "semantic-ui-react";
import { resetPassword } from "../../../redux/actions/users";

import Footer from "./Footer";

const Login = (props) => {
    const params = new URLSearchParams(props.location.search);
    const { register, handleSubmit, errors, watch } = useForm();
    const notifications = useSelector((state) => state.notifications);
    const dispatch = useDispatch();

    const onSubmit = (data) =>
        dispatch(resetPassword(params.get("token"), data.password));

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
                            Update Password
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
