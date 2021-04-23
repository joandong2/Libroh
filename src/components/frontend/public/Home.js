import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Grid,
  Image,
  Label,
  Pagination,
  Icon,
  Rating
} from "semantic-ui-react";
import { Row, Col, Layout } from "antd";

import { getBooks } from "../../../redux/actions/books";
import { getUser, updateUserBook } from "../../../redux/actions/users";
import cookies from "js-cookies";

import Header from "../public/Header";
import Sidebar from "../public/Sidebar";
import Footer from "../public/Footer";

const Home = props => {
  const [pageNum, setPageNum] = useState(1);
  const notifications = useSelector(state => state.notifications);
  const books = useSelector(state => state.books);
  const user = useSelector(state => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks(props.match.params.category, pageNum));
    if (cookies.getItem("_user")) {
      dispatch(getUser(parseInt(cookies.getItem("_user"))));
    }
  }, [dispatch, props.match.params.category, pageNum]);

  const paginationChange = (e, { activePage }) => {
    setPageNum(parseInt(activePage));
  };

  return (
    <>
      <Header />
      <Row gutter={32}>
        <Sidebar />
        <Col span={16} align="left">
          {notifications.loading ? (
            <Row style={{ height: "10vh" }} verticalAlign="middle">
              <div className="loader"></div>
            </Row>
          ) : (
            <Row gutter={16}>
              {books.books &&
                books.books.map(book => {
                  return (
                    <Col span={3} className="book" key={book.id} align="center">
                      <Image src={book.cover} />

                      <Label className="author" as="a">
                        {book.author_name}
                      </Label>

                      <p className="book-title">
                        {user.user && (
                          <Icon>
                            <Icon
                              key={book.id}
                              link
                              name={`${
                                user.user.saved_books.includes(book.id)
                                  ? `bookmark`
                                  : `bookmark outline`
                              }`}
                              onClick={e => {
                                e.preventDefault();
                                dispatch(
                                  updateUserBook(
                                    parseInt(cookies.getItem("_user")),
                                    book.id
                                  )
                                );
                              }}
                            />
                          </Icon>
                        )}
                        <a
                          href={`http://localhost:3000/${book.slug}`}
                          className="title"
                        >
                          {book.title}
                        </a>
                      </p>
                      <Rating
                        defaultRating={parseFloat(book.ratings).toFixed(0)}
                        maxRating={5}
                        disabled
                      />
                    </Col>
                  );
                })}
            </Row>
          )}
          {books.books && (
            <Pagination
              boundaryRange={0}
              onPageChange={paginationChange}
              defaultActivePage={1}
              ellipsisItem={null}
              firstItem={null}
              lastItem={null}
              siblingRange={1}
              totalPages={books.totalPages}
            />
          )}
        </Col>
      </Row>
      <Footer />
    </>
  );
};

export default Home;
