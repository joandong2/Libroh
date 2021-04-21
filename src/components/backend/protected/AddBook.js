import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { useForm } from "react-hook-form";
import { Grid, Form, Button } from "semantic-ui-react";
import { useForm } from "react-hook-form";

import { getAuthors } from "../../../redux/actions/authors";
import { getPublishers } from "../../../redux/actions/publishers";

import Header from "./Header";
import Footer from "./Footer";

const AddBook = props => {
  //const notifications = useSelector(state => state.notifications);
  const authors = useSelector(state => state.authors);
  const publishers = useSelector(state => state.publishers);
  const dispatch = useDispatch();

  const { register, errors, handleSubmit, watch } = useForm();
  const watchAllFields = watch();

  useEffect(() => {
    dispatch(getPublishers());
    dispatch(getAuthors());
  }, [dispatch]);

  const onSubmit = (data, e) => {
    console.log("Submit event", e);
    alert(JSON.stringify(data));
  };

  console.log("watchAllFields", watchAllFields);

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
                <Form.Field>
                  <label htmlFor="name">Authors</label>
                  <select name="authors" id="authors" ref={register()}>
                    {authors.authors &&
                      authors.authors.map(author => {
                        return (
                          <option key={author.id} value={author.id}>
                            {author.name}
                          </option>
                        );
                      })}
                  </select>
                </Form.Field>
                <Form.Field>
                  <label htmlFor="name">Publishers</label>
                  <select name="publishers" id="publishers" ref={register()}>
                    {publishers.publishers &&
                      publishers.publishers.map(publisher => {
                        return (
                          <option key={publisher.id} value={publisher.id}>
                            {publisher.name}
                          </option>
                        );
                      })}
                  </select>
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
