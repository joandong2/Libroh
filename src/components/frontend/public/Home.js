import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Grid, Image, Label, Pagination, Icon } from "semantic-ui-react";
import { getBooks } from "../../../redux/actions/books";
import { getUser, updateUserBook } from "../../../redux/actions/users";
import cookies from "js-cookies";

import Header from "../public/Header";
import Sidebar from "../public/Sidebar";
import Footer from "../public/Footer";

const Home = (props) => {
    const [pageNum, setPageNum] = useState(1);
    const notifications = useSelector((state) => state.notifications);
    const books = useSelector((state) => state.books);
    const user = useSelector((state) => state.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBooks(props.match.params.category, pageNum));
        if (cookies.getItem("_user")) {
            dispatch(getUser(parseInt(cookies.getItem("_user"))));
        }
    }, [dispatch, props.match.params.category, pageNum]);

    const paginationChange = (e) => {
        setPageNum(parseInt(e.target.innerText));
    };

    return (
        <>
            <Header />
            <Grid padded columns={2} className="main-content">
                <Grid.Row>
                    <Sidebar />
                    <Grid.Column className="content" width={13} align="left">
                        <Grid columns={9} className="books">
                            {notifications.loading ? (
                                <Grid.Row
                                    style={{ height: "10vh" }}
                                    verticalAlign="middle"
                                >
                                    <div className="loader"></div>
                                </Grid.Row>
                            ) : (
                                <Grid.Row>
                                    {books.books &&
                                        books.books.map((book) => {
                                            return (
                                                <Grid.Column
                                                    className="book"
                                                    key={book.id}
                                                    align="center"
                                                >
                                                    <Image src={book.cover} />

                                                    <Label
                                                        className="author"
                                                        as="a"
                                                    >
                                                        {book.author_name}
                                                    </Label>

                                                    <p className="book-title">
                                                        {user.user && (
                                                            <>
                                                                <Icon
                                                                    key={
                                                                        book.id
                                                                    }
                                                                    link
                                                                    name={`${
                                                                        user.user.saved_books.includes(
                                                                            book.id
                                                                        )
                                                                            ? `bookmark`
                                                                            : `bookmark outline`
                                                                    }`}
                                                                    onClick={(
                                                                        e
                                                                    ) => {
                                                                        e.preventDefault();
                                                                        dispatch(
                                                                            updateUserBook(
                                                                                parseInt(
                                                                                    cookies.getItem(
                                                                                        "_user"
                                                                                    )
                                                                                ),
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
                                                </Grid.Column>
                                            );
                                        })}
                                </Grid.Row>
                            )}
                            {books.books && (
                                <Pagination
                                    boundaryRange={0}
                                    onPageChange={paginationChange}
                                    defaultActivePage={pageNum}
                                    ellipsisItem={null}
                                    firstItem={null}
                                    lastItem={null}
                                    siblingRange={1}
                                    totalPages={books.totalPages}
                                />
                            )}
                        </Grid>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            <Footer />
        </>
    );
};

export default Home;
