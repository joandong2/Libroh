import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { useForm } from "react-hook-form";
import { Row, Col, Form, Button, Alert, Select } from "antd";
import { useForm } from "react-hook-form";

import { getAuthors } from "../../../redux/actions/authors";
import { getPublishers } from "../../../redux/actions/publishers";
import {
  getBook,
  updateBook,
  getAllCategories
} from "../../../redux/actions/books";

import Header from "./Header";
import Footer from "./Footer";

const EditBook = props => {
  const notifications = useSelector(state => state.notifications);
  const authors = useSelector(state => state.authors);
  const publishers = useSelector(state => state.publishers);
  const books = useSelector(state => state.books);
  const [dropDownValues, setDropDownValues] = useState({
    author: "",
    publisher: "",
    categories: [1]
  });
  const dispatch = useDispatch();
  const { register, errors, handleSubmit, watch, reset } = useForm();

  useEffect(() => {
    dispatch(getBook(props.match.params.slug));
    dispatch(getAllCategories());
    dispatch(getPublishers());
    dispatch(getAuthors());
  }, [dispatch, props.match.params.slug]);

  useEffect(() => {
    if (books.book !== null) {
      setDropDownValues({
        author: books.book[0].author_id,
        publisher: books.book[0].publisher_id,
        categories: books.book[0].category_ids
      });
    }
  }, [books.book]);

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
    // alert(JSON.stringify(dropDownValues));
    dispatch(updateBook(props.match.params.slug, { data, dropDownValues }));
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
                    name="title"
                    placeholder="Book Title"
                    ref={register({
                      required: "Book Title is required."
                    })}
                    className="ant-input"
                    value={books.book !== null ? books.book[0].title : null}
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
                    defaultValue={
                      books.book !== null ? books.book[0].isbn : null
                    }
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
                    defaultValue={
                      books.book !== null ? books.book[0].description : null
                    }
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
                    defaultValue={
                      books.book !== null ? books.book[0].total_pages : null
                    }
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
                    defaultValue={
                      books.book !== null ? books.book[0].year : null
                    }
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
                        <option
                          value={author.id}
                          selected={
                            books.book !== null &&
                            books.book[0].author_name === author.name
                              ? "selected"
                              : null
                          }
                        >
                          {author.name}
                        </option>
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
                        <option
                          value={publisher.id}
                          selected={
                            books.book !== null &&
                            books.book[0].publisher_name === publisher.name
                              ? "selected"
                              : null
                          }
                        >
                          {publisher.name}
                        </option>
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
                              //category.slug === "uncategorized" ? true : false
                              books.book !== null &&
                              books.book[0].category_slug.includes(
                                category.slug
                              )
                                ? true
                                : false
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

export default EditBook;
