import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { Row, Col, Form, Button, Alert } from "antd";
import { adminLogin } from "../../../redux/actions/admins";

// import Header from "../public/Header";
// import Footer from "../public/Footer";

const Login = props => {
  const { register, handleSubmit, errors } = useForm();
  const notifications = useSelector(state => state.notifications);
  const dispatch = useDispatch();
  const onSubmit = data => dispatch(adminLogin(data));

  return (
    <>
      {/* <Header /> */}
      <Row justify="center">
        <Col className="form-column">
          <h2>Admin</h2>
          <div className="loader-wrapper" align="center">
            {notifications.loading && <div className="loader"></div>}
          </div>

          {notifications.message && (
            <Alert message={notifications.message} type="warning" showIcon />
          )}

          <Form
            onFinish={handleSubmit(onSubmit)}
            className="ant-form ant-form-horizontal login-form"
          >
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
                <i aria-hidden="true" className="user icon"></i>
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
              </div>
              {errors.password && (
                <p className="errors">
                  <i class="fas fa-exclamation-triangle"></i>{" "}
                  {errors.password.message}
                </p>
              )}
            </div>

            <div className="ant-form-item">
              <Button
                type="primary"
                htmlType="submit"
                className="ant-btn ant-btn-primary login-form-button"
              >
                Login
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
      {/* <Footer /> */}
    </>
  );
};

export default Login;
