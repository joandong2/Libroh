import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { useForm } from "react-hook-form";
import { Row, Col, Form, Button, Alert, Select } from "antd";
import { useForm } from "react-hook-form";

import { getAuthors } from "../../../redux/actions/authors";
import { getPublishers } from "../../../redux/actions/publishers";
import {
  postBook,
  getCategories,
  getBooks
} from "../../../redux/actions/books";

import Header from "./Header";
import Footer from "./Footer";

const AddBook = props => {
  const notifications = useSelector(state => state.notifications);
  const authors = useSelector(state => state.authors);
  const publishers = useSelector(state => state.publishers);
  const books = useSelector(state => state.books);
  const dispatch = useDispatch();
  const [dropDownValues, setDropDownValues] = useState({
    author: "",
    publisher: "",
    categories: [1]
  });

  const { register, errors, handleSubmit, watch, reset } = useForm();

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getPublishers());
    dispatch(getAuthors());
  }, [dispatch]);

  const handleDropDown = e => {
    setDropDownValues({
      ...dropDownValues,
      [e.target.name]: e.target.value
    });
  };

  const handleCheckbox = e => {
    let value = parseInt(e.target.value);
    if (dropDownValues.categories.includes(value)) {
      setDropDownValues({
        ...dropDownValues,
        categories: dropDownValues.categories.filter(e => e !== value)
      });
    } else {
      setDropDownValues({
        ...dropDownValues,
        categories: [...dropDownValues.categories, value]
      });
    }
  };

  const onSubmit = (data, e) => {
    // alert(JSON.stringify(data));
    dispatch(postBook({ data, dropDownValues }));
    setDropDownValues({
      author: "",
      publisher: "",
      categories: [1]
    });
    reset();
  };

  console.log("val", dropDownValues);

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
                    name="title"
                    placeholder="Book Title"
                    ref={register({
                      required: "Book Title is required."
                    })}
                    className="ant-input"
                  />
                  <i aria-hidden="true" className="user icon"></i>
                </div>
                {errors.title && (
                  <p className="errors">
                    <i class="fas fa-exclamation-triangle"></i>{" "}
                    {errors.title.message}
                  </p>
                )}
              </div>

              <div className="ant-form-item">
                <div className="ant-form-item-control">
                  <input
                    name="isbn"
                    placeholder="ISBN"
                    ref={register({
                      required: "ISBN is required."
                    })}
                    className="ant-input"
                  />
                  <i aria-hidden="true" className="user icon"></i>
                </div>
                {errors.isbn && (
                  <p className="errors">
                    <i class="fas fa-exclamation-triangle"></i>{" "}
                    {errors.isbn.message}
                  </p>
                )}
              </div>

              <div className="ant-form-item">
                <div className="ant-form-item-control">
                  <textarea
                    rows="4"
                    cols="50"
                    name="description"
                    placeholder="Description"
                    ref={register({
                      required: "Description is required."
                    })}
                    className="ant-input"
                  />
                  <i aria-hidden="true" className="user icon"></i>
                </div>
                {errors.description && (
                  <p className="errors">
                    <i class="fas fa-exclamation-triangle"></i>{" "}
                    {errors.description.message}
                  </p>
                )}
              </div>

              <div className="ant-form-item">
                <div className="ant-form-item-control">
                  <input
                    type="number"
                    name="total_pages"
                    placeholder="Total Pages"
                    ref={register({
                      required: "Total Pages is required."
                    })}
                    className="ant-input"
                  />
                  <i aria-hidden="true" className="user icon"></i>
                </div>
                {errors.total_pages && (
                  <p className="errors">
                    <i class="fas fa-exclamation-triangle"></i>{" "}
                    {errors.total_pages.message}
                  </p>
                )}
              </div>

              <div className="ant-form-item">
                <div className="ant-form-item-control">
                  <input
                    type="number"
                    name="year"
                    placeholder="Year"
                    ref={register({
                      required: "Year is required."
                    })}
                    className="ant-input"
                  />
                  <i aria-hidden="true" className="user icon"></i>
                </div>
                {errors.year && (
                  <p className="errors">
                    <i class="fas fa-exclamation-triangle"></i>{" "}
                    {errors.year.message}
                  </p>
                )}
              </div>

              <div className="ant-form-item">
                <div className="ant-form-item-control">
                  <select
                    name="author"
                    className="ant-input"
                    onChange={handleDropDown}
                  >
                    <option value="" disabled selected>
                      Select author
                    </option>
                    {authors.authors &&
                      authors.authors.map(author => (
                        <option value={author.id}>{author.name}</option>
                      ))}
                  </select>
                  <i aria-hidden="true" className="user icon"></i>
                </div>
                {errors.authors && (
                  <p className="errors">
                    <i class="fas fa-exclamation-triangle"></i>{" "}
                    {errors.authors.message}
                  </p>
                )}
              </div>

              <div className="ant-form-item">
                <div className="ant-form-item-control">
                  <select
                    name="publisher"
                    className="ant-input"
                    onChange={handleDropDown}
                  >
                    <option value="" disabled selected>
                      Select publisher
                    </option>
                    {publishers.publishers &&
                      publishers.publishers.map(publisher => (
                        <option value={publisher.id}>{publisher.name}</option>
                      ))}
                  </select>
                  <i aria-hidden="true" className="user icon"></i>
                </div>
                {errors.publisher && (
                  <p className="errors">
                    <i class="fas fa-exclamation-triangle"></i>{" "}
                    {errors.publisher.message}
                  </p>
                )}
              </div>

              <div className="ant-form-item">
                <div className="ant-form-item-control">
                  <legend>Categories</legend>
                  <Row style={{ padding: "0" }}>
                    {books.categories &&
                      books.categories.categories.map(category => (
                        <Col span={24}>
                          <input
                            type="checkbox"
                            name={category.name}
                            value={category.id}
                            defaultChecked={
                              category.slug === "uncategorized" ? true : false
                            }
                            onChange={handleCheckbox}
                          />
                          <label> {category.name}</label>
                        </Col>
                      ))}
                  </Row>
                </div>
                {errors.publisher && (
                  <p className="errors">
                    <i class="fas fa-exclamation-triangle"></i>{" "}
                    {errors.publisher.message}
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

export default AddBook;
