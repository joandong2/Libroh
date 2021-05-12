import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { Row, Col, Form, Button, Alert } from "antd";
import { userSignup } from "../../../redux/actions/users";

import Header from "../public/Header";
import Footer from "../public/Footer";

const Login = props => {
  const { register, handleSubmit, errors, watch } = useForm();
  const notifications = useSelector(state => state.notifications);
  const dispatch = useDispatch();

  const onSubmit = data => dispatch(userSignup(data));

  return (
    <>
      <Header />
      <Row justify="center">
        <Col className="form-column">
          <div className="loader-wrapper" align="center">
            {notifications.loading && <div className="loader"></div>}
          </div>

          {notifications.message && (
            <Alert message={notifications.message} type="warning" />
          )}

          <Form size="large" onFinish={handleSubmit(onSubmit)}>
            <div className="ant-form-item">
              <div className="ant-form-item-control">
                <input
                  name="name"
                  placeholder="Name"
                  ref={register({
                    required: "Name is required.",
                    minLength: {
                      value: 8,
                      message: "Name must be minimum of 8 characters."
                    }
                  })}
                  className="ant-input"
                />
                <i aria-hidden="true" className="user icon"></i>
              </div>
              {errors.name && (
                <p className="errors">
                  <i class="fas fa-exclamation-triangle"></i>{" "}
                  {errors.name.message}
                </p>
              )}
            </div>
            <div className="ant-form-item">
              <div className="ant-form-item-control">
                <input
                  name="phone"
                  placeholder="Phone Number"
                  ref={register({
                    required: "Phone Number is required.",
                    minLength: {
                      value: 8,
                      pattern: {
                        value: /[0-9]*/i,
                        message: "Invalid phone number."
                      },
                      message: "Phone Number must be minimum of 8 characters."
                    }
                  })}
                  className="ant-input"
                />
                <i aria-hidden="true" className="phone icon"></i>
              </div>
              {errors.phone && (
                <p className="errors">
                  <i class="fas fa-exclamation-triangle"></i>{" "}
                  {errors.phone.message}
                </p>
              )}
            </div>
            <div className="ant-form-item">
              <div className="ant-form-item-control">
                <input
                  name="address"
                  placeholder="Address"
                  ref={register({
                    required: "Address is required.",
                    minLength: {
                      value: 8,
                      message: "Address must be minimum of 8 characters."
                    }
                  })}
                  className="ant-input"
                />
              </div>
              {errors.address && (
                <p className="errors">
                  <i class="fas fa-exclamation-triangle"></i>{" "}
                  {errors.address.message}
                </p>
              )}
            </div>
            <div className="ant-form-item">
              <div className="ant-form-item-control">
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
                  className="ant-input"
                />
                <i aria-hidden="true" className="mail icon"></i>
              </div>
              {errors.email && (
                <p className="errors">
                  <i class="fas fa-exclamation-triangle"></i>{" "}
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="ant-form-item">
              <div className="ant-form-item-control">
                <input
                  name="password"
                  type="password"
                  placeholder="Password"
                  ref={register({
                    required: "Password is required.",
                    minLength: {
                      value: 8,
                      message: "Password must be minimum of 8 characters."
                    }
                  })}
                  className="ant-input"
                />
                <i aria-hidden="true" className="lock icon"></i>
              </div>
              {errors.password && (
                <p className="errors">
                  <i class="fas fa-exclamation-triangle"></i>{" "}
                  {errors.password.message}
                </p>
              )}
            </div>
            <div className="ant-form-item">
              <div className="ant-form-item-control">
                <input
                  name="confirm_password"
                  type="password"
                  placeholder="Confirm Password"
                  ref={register({
                    required: "Confirm Password is required.",
                    minLength: {
                      value: 8,
                      message:
                        "Confirm Password must be minimum of 8 characters."
                    },
                    validate: value =>
                      value === watch("password") || "Passwords don't match."
                  })}
                  className="ant-input"
                />
                <i aria-hidden="true" className="lock icon"></i>
              </div>
              {errors.confirm_password && (
                <p className="errors">
                  <i class="fas fa-exclamation-triangle"></i>{" "}
                  {errors.confirm_password.message}
                </p>
              )}
            </div>

            <div className="ant-form-item">
              <Button
                type="primary"
                htmlType="submit"
                className="ant-btn ant-btn-primary login-form-button"
              >
                Signup
              </Button>
            </div>
          </Form>
          <p align="left">
            Have account? <a href="/login">Login</a>
          </p>
        </Col>
      </Row>
      <Footer />
    </>
  );
};

export default Login;
