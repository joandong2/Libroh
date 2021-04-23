import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Grid, Image, Label, Rating } from "semantic-ui-react";
import { getBook, updateBookRatingByUser } from "../../../redux/actions/books";
import { getUser } from "../../../redux/actions/users";
import { Row, Col } from "antd";
import cookies from "js-cookies";

import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

const Book = props => {
  const [userRating, setUserRating] = useState(0);
  const [localLoading, setLocalLoading] = useState(true);
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

  useEffect(() => {
    if (book && user.user && user.user.books_rated) {
      user.user.books_rated.map(el => {
        return el.book_id === book[0].id ? setUserRating(el.rating) : null;
      });
      setLocalLoading(false);
    }
  }, [book, user.user]);

  const handleRate = async (e, { rating }) => {
    e.preventDefault();
    if (book && user.user) {
      await dispatch(
        updateBookRatingByUser(book[0].slug, book[0].id, user.user.id, rating)
      );
    }
  };

  return (
    <>
      <Header />
      <Row className="main-content">
        <Sidebar />
        <Col align="left" span={16}>
          <div className="single-book">
            {notifications.loading ? (
              <Row style={{ height: "10vh" }} verticalAlign="middle">
                <div className="loader"></div>
              </Row>
            ) : (
              <Row>
                {book &&
                  book.map(book => {
                    return (
                      <div className="book">
                        <Col span={4} key={book.id}>
                          <Image src={book.cover} />
                        </Col>
                        <Col span={8}>
                          <h1
                            href={`http://localhost:3000/${book.slug}`}
                            className="title"
                          >
                            {book.title}
                          </h1>
                          {book.category_name.map(category => {
                            return <Label key={category}>{category}</Label>;
                          })}
                          <p
                            style={{
                              marginBottom: 0
                            }}
                          >
                            Author: {book.author_name}, {book.year}
                          </p>
                          <p>Publisher: {book.publisher_name}</p>
                          <p>{book.description}</p>
                          {!user.user ? (
                            <Rating
                              defaultRating={parseInt(book.ratings)}
                              maxRating={5}
                              disabled
                            />
                          ) : (
                            !localLoading && (
                              <Rating
                                defaultRating={parseInt(userRating)}
                                maxRating={5}
                                onRate={handleRate}
                              />
                            )
                          )}
                        </Col>
                      </div>
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
