import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { Button, Form, Grid, Icon, Message } from "semantic-ui-react";
import cookies from "js-cookies";
import { getUser, updateUser } from "../../../redux/actions/users";
import Header from "../public/Header";
import Footer from "../public/Footer";

const Profile = (props) => {
    const { register, handleSubmit, errors, watch, setValue } = useForm();
    const notifications = useSelector((state) => state.notifications);
    const user = useSelector((state) => state.users.user);
    const dispatch = useDispatch();
    let userId = cookies.getItem("_user");

    useEffect(() => {
        if (userId) {
            dispatch(getUser(userId));
        }
    }, [dispatch, userId]);

    useEffect(() => {
        if (user) {
            const fields = ["name", "phone", "address", "email"];
            fields.forEach((field) => setValue(field, user[field]));
        }
    }, [user, setValue]);

    const onSubmit = (data) => {
        dispatch(updateUser(userId, data));
    };

    return (
        <>
            <Header />
            <Grid textAlign="center" verticalAlign="middle">
                <Grid.Column style={{ maxWidth: 450 }}>
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
                                    readOnly
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
                        </div>
                        <p>Set new password</p>
                        <div className="field">
                            <div className="ui fluid left icon input">
                                <input
                                    name="password"
                                    type="password"
                                    placeholder="Password"
                                    ref={register({
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
                            Update Profile
                        </Button>
                    </Form>
                </Grid.Column>
            </Grid>
            <Footer />
        </>
    );
};

export default Profile;
