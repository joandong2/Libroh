import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { useForm } from "react-hook-form";
import { Grid, Form, Button, Dropdown } from "semantic-ui-react";
import { useForm } from "react-hook-form";

import { getAuthors } from "../../../redux/actions/authors";
import { getPublishers } from "../../../redux/actions/publishers";
import { postBook } from "../../../redux/actions/books";

import Header from "./Header";
import Footer from "./Footer";

const AddBook = props => {
  //const notifications = useSelector(state => state.notifications);
  const authors = useSelector(state => state.authors);
  const publishers = useSelector(state => state.publishers);
  const dispatch = useDispatch();
  const [dropDownValues, setDropDownValues] = useState({
    author: "",
    publisher: ""
  });

  const { register, errors, handleSubmit, watch, reset } = useForm();
  const titleFieldValue = watch(["title"]);

  useEffect(() => {
    dispatch(getPublishers());
    dispatch(getAuthors());
  }, [dispatch]);

  const authorsObject =
    authors.authors &&
    authors.authors.map(author => {
      return { key: author.id, value: author.id, text: author.name };
    });

  const publishersObject =
    publishers.publishers &&
    publishers.publishers.map(publisher => {
      return { key: publisher.id, value: publisher.id, text: publisher.name };
    });

  const handleDropDown = (e, data) => {
    setDropDownValues({
      ...dropDownValues,
      [data.name]: data.value
    });
  };

  const onSubmit = (data, e) => {
    //alert(JSON.stringify(data));
    dispatch(postBook({ data, dropDownValues }));
    setDropDownValues({
      author: "",
      publisher: ""
    });
    reset();
  };

  return (
    <div className="wrapper">
      <Header />

      <Grid padded className="title-box">
        <Grid container>
          <h3 className="page-title">Add Book</h3>
        </Grid>
      </Grid>

      <Grid padded>
        <Grid container>
          <div className="card">
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Field>
                <label htmlFor="name">Book Title</label>
                <input
                  type="text"
                  name="title"
                  placeholder="Title"
                  id="title"
                  ref={register({ required: "Title is required." })}
                />
                {errors.title && (
                  <p className="form-error">{errors.title.message}</p>
                )}

                <p className="slug">
                  slug:{"  "}
                  {titleFieldValue.title !== undefined
                    ? titleFieldValue.title.toLowerCase().split(" ").join("-")
                    : ""}
                </p>
              </Form.Field>
              <Form.Field>
                <label htmlFor="name">ISBN</label>
                <input
                  type="text"
                  name="isbn"
                  placeholder="ISBN"
                  id="isbn"
                  ref={register({
                    required: "ISBN is required.",
                    minLength: {
                      value: 8,
                      message: "Password must have at least 8 characters"
                    }
                  })}
                />
                {errors.isbn && (
                  <p className="form-error">{errors.isbn.message}</p>
                )}
              </Form.Field>
              <Form.Field>
                <label htmlFor="description">Description</label>
                <textarea
                  name="description"
                  label="Description"
                  placeholder="Description"
                  ref={register({ required: "Description is required." })}
                ></textarea>
                {errors.description && (
                  <p className="form-error">{errors.description.message}</p>
                )}
              </Form.Field>
              <Form.Group widths="equal">
                <Form.Field>
                  <label htmlFor="name">Total Pages</label>
                  <input
                    type="number"
                    name="total_pages"
                    placeholder="Total Pages"
                    id="total_pages"
                    ref={register({ required: "Total Pages is required." })}
                  />
                  {errors.total_pages && (
                    <p className="form-error">{errors.total_pages.message}</p>
                  )}
                </Form.Field>
                <Form.Field>
                  <label htmlFor="name">Year</label>
                  <input
                    type="number"
                    name="year"
                    placeholder="Year"
                    id="year"
                    ref={register({ required: "Year is required." })}
                  />
                  {errors.year && (
                    <p className="form-error">{errors.year.message}</p>
                  )}
                </Form.Field>
              </Form.Group>
              <Form.Group widths="equal">
                <Form.Field>
                  <label htmlFor="name">Authors</label>
                  <Dropdown
                    name="author"
                    id="authors"
                    placeholder="Select Author"
                    onChange={handleDropDown}
                    fluid
                    search
                    selection
                    options={authorsObject}
                  />
                </Form.Field>
                <Form.Field>
                  <label htmlFor="name">Publishers</label>
                  <Dropdown
                    name="publisher"
                    id="publisher"
                    placeholder="Select Publisher"
                    onChange={handleDropDown}
                    fluid
                    search
                    selection
                    options={publishersObject}
                  />
                </Form.Field>
              </Form.Group>{" "}
              <Button type="submit">Submit</Button>
            </Form>
          </div>
        </Grid>
      </Grid>

      <Footer />
    </div>
  );
};

export default AddBook;
