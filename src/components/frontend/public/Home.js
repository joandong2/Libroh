import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Grid, Image, Label, Pagination } from "semantic-ui-react";
import { getBooks } from "../../../redux/actions/books";

import Header from "../public/Header";
import Sidebar from "../public/Sidebar";
import Footer from "../public/Footer";

const Home = (props) => {
    const [pageNum, setPageNum] = useState(1);
    const notifications = useSelector((state) => state.notifications);
    const books = useSelector((state) => state.books);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBooks(props.match.params.category, pageNum));
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
                        <Grid columns={10} className="books">
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
