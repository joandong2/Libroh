import React from "react";
import { useSelector, useDispatch } from "react-redux";
// import { useForm } from "react-hook-form";
import { Row, Col, Form, Button, Alert } from "antd";
import { useForm } from "react-hook-form";
import { postCategory } from "../../../../redux/actions/books";

import Header from "../Header";
import Footer from "../Footer";

const AddCategory = (props) => {
  const notifications = useSelector((state) => state.notifications);
  // const books = useSelector(state => state.books);
  const dispatch = useDispatch();

  const { register, errors, handleSubmit, reset } = useForm();

  const onSubmit = (data, e) => {
    // alert(JSON.stringify(data));
    dispatch(postCategory(data));
    reset();
  };

  return (
    <div className="dashboard">
      <div className="header-wrapper">
        <Col span={17} offset={3}>
          <Header />
        </Col>
      </div>
      <Row>
        <Col span={17} offset={3}>
          <h3 className="page-title">Add New Book</h3>

          <Col span={12} align="left">
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
                    placeholder="Category Name"
                    ref={register({
                      required: "Category Name is required.",
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
                <Button
                  type="primary"
                  htmlType="submit"
                  className="ant-btn ant-btn-primary login-form-button"
                >
                  Submit
                </Button>
              </div>
            </Form>
          </Col>

          <Footer />
        </Col>
      </Row>
    </div>
  );
};

export default AddCategory;
