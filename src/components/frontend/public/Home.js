import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col, Image, Pagination, Rate } from "antd";
import { getBooks } from "../../../redux/actions/books";
import { getUser } from "../../../redux/actions/users";
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

  const paginationChange = page => {
    setPageNum(parseInt(page));
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
                    <Col span={4} className="book" key={book.id} align="center">
                      <Image
                        width={180}
                        height={280}
                        src={book.cover}
                        preview={false}
                      />
                      <Rate
                        disabled
                        defaultValue={parseFloat(book.ratings).toFixed(0)}
                      />
                      <p className="book-title">
                        {user.user &&
                          user.user.saved_books &&
                          user.user.saved_books.includes(book.id) && (
                            <i class="fas fa-bookmark"></i>
                            // onClick={e => {
                            //   e.preventDefault();
                            //   dispatch(
                            //     updateUserBook(
                            //       parseInt(cookies.getItem("_user")),
                            //       book.id
                            //     )
                            //   );
                            // }}
                          )}
                        <a
                          href={`http://localhost:3000/${book.slug}`}
                          className="title"
                        >
                          {book.title}
                        </a>{" "}
                      </p>
                    </Col>
                  );
                })}
            </Row>
          )}
          <Row gutter={16}>
            {books.books && (
              <Pagination
                defaultCurrent={1}
                pageSize={books.limit}
                total={parseInt(books.totalPages)}
                onChange={paginationChange}
              />
            )}
          </Row>
        </Col>
      </Row>
      <Footer />
    </>
  );
};

export default Home;
