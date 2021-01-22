import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Grid, Image, Label } from "semantic-ui-react";
import { getBook } from "../../../redux/actions/books";

import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

const Book = (props) => {
    const notifications = useSelector((state) => state.notifications);
    const book = useSelector((state) => state.books.book);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBook(props.match.params.title));
    }, [dispatch, props.match.params.title]);

    return (
        <>
            <Header />
            <Grid padded columns={2} className="main-content">
                <Grid.Row>
                    <Sidebar />
                    <Grid.Column className="content" width={13} align="left">
                        <Grid columns={10} className="books">
                            <Grid.Row>
                                {notifications.loading ? (
                                    <Grid.Row
                                        style={{ height: "10vh" }}
                                        verticalAlign="middle"
                                    >
                                        <div className="loader"></div>
                                    </Grid.Row>
                                ) : (
                                    <Grid.Row>
                                        {book &&
                                            book.map((book) => {
                                                return (
                                                    <Grid.Column
                                                        className="book"
                                                        key={book.id}
                                                    >
                                                        <Image
                                                            src={book.cover}
                                                        />
                                                        <a
                                                            href={`http://localhost:3000/${book.slug}`}
                                                            className="title"
                                                        >
                                                            {book.title}
                                                        </a>
                                                        <Label
                                                            size="small"
                                                            content={
                                                                book.author_name
                                                            }
                                                            icon="user circle"
                                                        />
                                                    </Grid.Column>
                                                );
                                            })}
                                    </Grid.Row>
                                )}
                            </Grid.Row>
                        </Grid>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            <Footer />
        </>
    );
};

export default Book;
