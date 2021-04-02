import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Grid, Image, Label, Icon, Rating } from "semantic-ui-react";
import cookies from "js-cookies";
import { getUserBook, updateUserBook } from "../../../redux/actions/users";
import Header from "../public/Header";
import Sidebar from "../public/Sidebar";
import Footer from "../public/Footer";

const MyBook = props => {
  const notifications = useSelector(state => state.notifications);
  const books = useSelector(state => state.books);
  const user = useSelector(state => state.users);

  const dispatch = useDispatch();

  useEffect(() => {
    if (cookies.getItem("_user")) {
      dispatch(getUserBook(parseInt(cookies.getItem("_user"))));
    }
  }, [dispatch]);

  return (
    <>
      <Header />
      <Grid padded columns={2} className="main-content">
        <Grid.Row>
          <Sidebar />
          <Grid.Column className="content" width={13} align="left">
            <h4>Saved Books</h4>
            <Grid columns={9} className="books">
              {notifications.loading ? (
                <Grid.Row style={{ height: "10vh" }} verticalAlign="middle">
                  <div className="loader"></div>
                </Grid.Row>
              ) : (
                <Grid.Row>
                  {books.books &&
                    books.books.map(book => {
                      return user.user.saved_books.includes(book.id) ? (
                        <Grid.Column className="book" key={book.id}>
                          <Image src={book.cover} />

                          <Label className="author" as="a">
                            {book.author_name}
                          </Label>
                          <p className="book-title">
                            {user.user && (
                              <>
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
                              </>
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
                        </Grid.Column>
                      ) : null;
                    })}
                </Grid.Row>
              )}
            </Grid>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Footer />
    </>
  );
};

export default MyBook;
