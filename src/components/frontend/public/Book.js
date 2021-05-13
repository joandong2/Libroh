import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBook, updateBookRatingByUser } from "../../../redux/actions/books";
import { getUser } from "../../../redux/actions/users";
import { Row, Col, Image, Rate, Alert, Tag } from "antd";
import cookies from "js-cookies";

import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

const Book = props => {
  console.log(props.match.params.title);

  const notifications = useSelector(state => state.notifications);
  const book = useSelector(state => state.books.book);
  const user = useSelector(state => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBook(props.match.params.title));
    if (cookies.getItem("_user")) {
      dispatch(getUser(parseInt(cookies.getItem("_user"))));
    }
  }, [dispatch, props.match.params.title]);

  console.log("book", book);

  return (
    <>
      <Header />
      <Row className="main-content">
        <Sidebar />
        <Col align="left" span={16}>
          <div className="single-book">
            {notifications.message && (
              <Alert message={notifications.message} type="warning" showIcon />
            )}
            {notifications.loading ? (
              <Row style={{ height: "10vh" }} verticalAlign="middle">
                <div className="loader"></div>
              </Row>
            ) : (
              <Row gutter={16}>
                {book &&
                  book.map(book => {
                    return (
                      <>
                        <Col span={8} key={book.id}>
                          <Image preview={false} src={book.cover} />
                        </Col>
                        <Col span={8}>
                          <div class="tags">
                            {book.category_name.map(category => {
                              return (
                                <Tag color="red" key={category}>
                                  {category}
                                </Tag>
                              );
                            })}
                          </div>
                          <h1
                            href={`http://localhost:3000/${book.slug}`}
                            className="title"
                          >
                            {book.title}
                          </h1>
                          {!user.user
                            ? book.ratings == null && (
                                <Rate
                                  disabled
                                  defaultValue={parseInt(
                                    book.ratings.toFixed(0)
                                  )}
                                />
                              )
                            : book.ratings != null && (
                                <Rate
                                  defaultValue={parseFloat(
                                    book.ratings
                                  ).toFixed(0)}
                                  onChange={rating => {
                                    dispatch(
                                      updateBookRatingByUser(
                                        book.slug,
                                        book.id,
                                        parseInt(cookies.getItem("_user")),
                                        rating
                                      )
                                    );
                                  }}
                                  value={parseFloat(book.ratings).toFixed(0)}
                                />
                              )}
                          <p
                            style={{
                              marginBottom: 0
                            }}
                          >
                            Author: {book.author_name}, {book.year}
                          </p>
                          <p>Publisher: {book.publisher_name}</p>
                          <p>{book.description}</p>
                        </Col>
                      </>
                    );
                  })}
              </Row>
            )}
          </div>
        </Col>
      </Row>
      <Footer />
    </>
  );
};

export default Book;
