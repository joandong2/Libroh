import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { useForm } from "react-hook-form";
import { Grid, Form, Button } from "semantic-ui-react";
import { useForm } from "react-hook-form";

import { getAuthors } from "../../../redux/actions/books";
import { getPublishers } from "../../../redux/actions/books";

import Header from "./Header";
import Footer from "./Footer";

const options = [
  { key: "m", text: "Male", value: "male" },
  { key: "f", text: "Female", value: "female" },
  { key: "o", text: "Other", value: "other" }
];

const AddBook = props => {
  //const { register, handleSubmit, errors } = useForm();
  //const notifications = useSelector((state) => state.notifications);
  //const dispatch = useDispatch();
  //const onSubmit = (data) => dispatch(userLogin(data));

  const { register, errors, handleSubmit } = useForm();

  const onSubmit = (data, e) => {
    console.log("Submit event", e);
    alert(JSON.stringify(data));
  };

  console.log(errors);

  // isbn: "98983-98238-hh2",
  // title: "Hello World",
  // slug: "hello-world",
  // description: "The red fox jump on the street.",
  // total_pages: 1037,
  // year: 1987,
  // cover:
  //     "https://res.cloudinary.com/johnoblenda/image/upload/v1605840344/libroh/9983887a68f91a927a95308eb9791e5b_tn82mf.png",
  // author_id: 1,
  // publisher_id: 1,

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
              <Form.Group widths="equal">
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
                </Form.Field>
              </Form.Group>
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
                  <label htmlFor="name">Slug</label>
                  <input
                    type="text"
                    name="slug"
                    placeholder="Slug"
                    id="sug"
                    ref={register({
                      required: "Slug is required."
                    })}
                  />
                  {errors.slug && (
                    <p className="form-error">{errors.slug.message}</p>
                  )}
                </Form.Field>
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
                    type="text"
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
                <Form.Select
                  name="author"
                  label="Author"
                  options={options}
                  placeholder="Author"
                  ref={register({ maxLength: 100 })}
                  error={errors.author ? true : false}
                />
                <Form.Select
                  name="publisher"
                  label="Publisher"
                  options={options}
                  placeholder="Publisher"
                  ref={register({ maxLength: 100 })}
                  error={errors.publisher ? true : false}
                />
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
