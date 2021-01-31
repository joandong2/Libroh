import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Grid, Image, Label } from "semantic-ui-react";
import cookies from "js-cookies";
import { getUser, getUserBook } from "../../../redux/actions/users";
import Header from "../public/Header";
import Sidebar from "../public/Sidebar";
import Footer from "../public/Footer";

const MyBook = (props) => {
    const notifications = useSelector((state) => state.notifications);
    const books = useSelector((state) => state.books);
    const user = useSelector((state) => state.users);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserBook(parseInt(cookies.getItem("_user"))));
    }, [dispatch]);

    return (
        <>
            <Header />
            <Grid padded columns={2} className="main-content">
                <Grid.Row>
                    <Sidebar />
                    <Grid.Column className="content" width={13} align="left">
                        <Grid columns={10} className="books">
                            <h1>My Book</h1>
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
                                                >
                                                    <Image src={book.cover} />
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
                        </Grid>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            <Footer />
        </>
    );
};

export default MyBook;
