import React from "react";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { Button, Form, Grid, Icon, Image, Message } from "semantic-ui-react";
import { userLogin } from "../../../redux/actions/users";

import Header from "../public/Header";
import Footer from "../public/Footer";

const Donate = (props) => {
    const { register, handleSubmit, errors } = useForm();
    const notifications = useSelector((state) => state.notifications);
    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <>
            <Header />
            <Grid
                textAlign="center"
                style={{ height: "60vh" }}
                verticalAlign="middle"
            >
                <Grid.Column style={{ maxWidth: 450 }}>
                    <div className="contact">
                        <Icon name="home circle right" /> Dona Maria Subd.
                        <br /> Pala-o Iligan City
                        <br /> Philippines 9200
                        <br />
                        <br /> <Icon name="phone circle right" /> +63 908 935
                        6662
                        <br /> <Icon name="mail circle right" />{" "}
                        libroh.ph@gmail.com
                    </div>

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
                                    name="email"
                                    placeholder="Email address"
                                    ref={register({
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
                                    name="phone"
                                    placeholder="Phone Number"
                                    ref={register({
                                        required: "Email address is required.",
                                        pattern: {
                                            value: /[0-9]*/i,
                                            message: "Invalid phone number.",
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

                        <Button fluid size="small">
                            Donate
                        </Button>
                    </Form>
                </Grid.Column>
            </Grid>
            <Footer />
        </>
    );
};

export default Donate;
