import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBook, updateBookRatingByUser } from "../../../redux/actions/books";
import { getUser, updateUserBook } from "../../../redux/actions/users";
import { Row, Col, Image, Rate, Alert, Tag, Button } from "antd";
import cookies from "js-cookies";

import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

const Book = (props) => {
  const notifications = useSelector((state) => state.notifications);
  const book = useSelector((state) => state.books.book);
  const user = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBook(props.match.params.title));
    if (localStorage.getItem("_user")) {
      dispatch(getUser(parseInt(localStorage.getItem("_user"))));
    }
  }, [dispatch, props.match.params.title]);

  const bookmarkBook = (e) => {
    e.preventDefault();
    //console.log(book[0].id);
    dispatch(
      updateUserBook(parseInt(localStorage.getItem("_user")), book[0].id)
    );
  };

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
                  book.map((book) => {
                    return (
                      <>
                        <Col span={8} key={book.id}>
                          <Image preview={false} src={book.cover} />
                        </Col>
                        <Col span={8}>
                          <div class="tags">
                            {book.category_name.map((category) => {
                              return (
                                <Tag color="red" key={category}>
                                  {category}
                                </Tag>
                              );
                            })}
                          </div>

                          {user.user != null ? (
                            book.ratings == null ? (
                              <Rate
                                defaultValue={parseInt(book.ratings.toFixed(0))}
                                onChange={(rating) => {
                                  dispatch(
                                    updateBookRatingByUser(
                                      book.slug,
                                      book.id,
                                      parseInt(localStorage.getItem("_user")),
                                      rating
                                    )
                                  );
                                }}
                              />
                            ) : (
                              <Rate
                                defaultValue={parseFloat(book.ratings).toFixed(
                                  0
                                )}
                                onChange={(rating) => {
                                  dispatch(
                                    updateBookRatingByUser(
                                      book.slug,
                                      book.id,
                                      parseInt(localStorage.getItem("_user")),
                                      rating
                                    )
                                  );
                                }}
                                value={parseFloat(book.ratings).toFixed(0)}
                              />
                            )
                          ) : (
                            ""
                          )}
                          {user.user == null ? (
                            book.ratings == null ? (
                              <Tag color="#f50">No Ratings</Tag>
                            ) : (
                              <Rate
                                disabled
                                value={parseFloat(book.ratings).toFixed(0)}
                              />
                            )
                          ) : (
                            ""
                          )}

                          <h1 href={`/${book.slug}`} className="title">
                            {book.title}
                          </h1>
                          {user.user && user.user.saved_books ? (
                            user.user.saved_books.includes(book.id) ? (
                              <Button
                                size="small"
                                type="primary"
                                danger
                                onClick={bookmarkBook}
                              >
                                Remove from list
                              </Button>
                            ) : (
                              <Button
                                size="small"
                                type="primary"
                                onClick={bookmarkBook}
                              >
                                Add to list
                              </Button>
                            )
                          ) : null}

                          <p
                            style={{
                              marginBottom: 0,
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
