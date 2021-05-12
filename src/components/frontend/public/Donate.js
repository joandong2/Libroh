import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { Row, Col, Form, Button, Alert } from "antd";
import { donateBook } from "../../../redux/actions/users";

import Header from "../public/Header";
import Footer from "../public/Footer";

const Donate = props => {
  const { register, handleSubmit, errors } = useForm();
  const notifications = useSelector(state => state.notifications);
  const dispatch = useDispatch();
  const onSubmit = data => dispatch(donateBook(data));

  return (
    <>
      <Header />
      <Row justify="center">
        <Col className="form-column" span={8}>
          <p>
            Bacon ipsum dolor amet shoulder burgdoggen sausage biltong. Short
            ribs short loin ham chislic porchetta. Buffalo pancetta drumstick,
            shank kevin ground round alcatra ribeye. Fatback tongue ham hock,
            chislic pig rump t-bone swine tri-tip jerky shankle venison biltong
            spare ribs. Chicken sausage frankfurter brisket jowl tri-tip tail
            kielbasa landjaeger alcatra ball tip rump ribeye cow pig. Tri-tip
            pastrami chicken, shoulder pork loin corned beef shank cow
            tenderloin venison ground round. Shank tenderloin salami rump jerky.
          </p>
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
                  name="name"
                  placeholder="Name"
                  ref={register({
                    required: "Name is required."
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
                  name="phone"
                  placeholder="Phone Number"
                  ref={register({
                    pattern: {
                      value: /[0-9]*/i,
                      message: "Invalid phone number."
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
                <textarea
                  name="message"
                  placeholder="Message"
                  ref={register({
                    required: "Message is required."
                  })}
                  className="ant-textarea"
                />
                <i aria-hidden="true" className="clone icon"></i>
              </div>
              {errors.message && (
                <p className="errors">
                  <i class="fas fa-exclamation-triangle"></i>{" "}
                  {errors.message.message}
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
      <Footer />
    </>
  );
};

export default Donate;
