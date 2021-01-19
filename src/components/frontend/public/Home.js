import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Grid, Image } from "semantic-ui-react";
import { getBooks } from "../../../redux/actions/books";

import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

console.log(getBooks);

const Home = (props) => {
    const notifications = useSelector((state) => state.notifications);
    const books = useSelector((state) => state.books);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBooks());
    }, [dispatch]);

    return (
        <>
            <Header />
            <Grid padded columns={2} className="main-content">
                <Grid.Row>
                    <Sidebar />
                    <Grid.Column className="content" width={13} align="left">
                        <Grid columns={10} className="books">
                            <Grid.Row>
                                <Grid.Column className="book">
                                    <Image src="//res.cloudinary.com/johnoblenda/image/upload/v1605840344/libroh/9983887a68f91a927a95308eb9791e5b_tn82mf.png" />
                                </Grid.Column>
                                <Grid.Column className="book">
                                    <Image src="//res.cloudinary.com/johnoblenda/image/upload/v1605840344/libroh/9983887a68f91a927a95308eb9791e5b_tn82mf.png" />
                                </Grid.Column>
                                <Grid.Column className="book">
                                    <Image src="//res.cloudinary.com/johnoblenda/image/upload/v1605840344/libroh/9983887a68f91a927a95308eb9791e5b_tn82mf.png" />
                                </Grid.Column>
                                <Grid.Column className="book">
                                    <Image src="//res.cloudinary.com/johnoblenda/image/upload/v1605840344/libroh/9983887a68f91a927a95308eb9791e5b_tn82mf.png" />
                                </Grid.Column>
                                <Grid.Column className="book">
                                    <Image src="//res.cloudinary.com/johnoblenda/image/upload/v1605840344/libroh/9983887a68f91a927a95308eb9791e5b_tn82mf.png" />
                                </Grid.Column>
                                <Grid.Column className="book">
                                    <Image src="//cdn3.vectorstock.com/i/1000x1000/43/07/vintage-book-cover-vector-22334307.jpg" />
                                </Grid.Column>
                                <Grid.Column className="book">
                                    <Image src="//edit.org/img/blog/xm68-book-cover-templates.jpg.pagespeed.ic.UkmaX_Yea1.jpg" />
                                </Grid.Column>
                                <Grid.Column className="book">
                                    <Image src="//res.cloudinary.com/johnoblenda/image/upload/v1605840344/libroh/9983887a68f91a927a95308eb9791e5b_tn82mf.png" />
                                </Grid.Column>
                                <Grid.Column className="book">
                                    <Image src="//res.cloudinary.com/johnoblenda/image/upload/v1605840344/libroh/9983887a68f91a927a95308eb9791e5b_tn82mf.png" />
                                </Grid.Column>
                                <Grid.Column className="book">
                                    <Image src="//res.cloudinary.com/johnoblenda/image/upload/v1605840344/libroh/9983887a68f91a927a95308eb9791e5b_tn82mf.png" />
                                </Grid.Column>
                                <Grid.Column className="book">
                                    <Image src="//res.cloudinary.com/johnoblenda/image/upload/v1605840344/libroh/9983887a68f91a927a95308eb9791e5b_tn82mf.png" />
                                </Grid.Column>
                                <Grid.Column className="book">
                                    <Image src="//res.cloudinary.com/johnoblenda/image/upload/v1605840344/libroh/9983887a68f91a927a95308eb9791e5b_tn82mf.png" />
                                </Grid.Column>
                                <Grid.Column className="book">
                                    <Image src="//cdn3.vectorstock.com/i/1000x1000/43/07/vintage-book-cover-vector-22334307.jpg" />
                                </Grid.Column>
                                <Grid.Column className="book">
                                    <Image src="//edit.org/img/blog/xm68-book-cover-templates.jpg.pagespeed.ic.UkmaX_Yea1.jpg" />
                                </Grid.Column>
                                <Grid.Column className="book">
                                    <Image src="//res.cloudinary.com/johnoblenda/image/upload/v1605840344/libroh/9983887a68f91a927a95308eb9791e5b_tn82mf.png" />
                                </Grid.Column>
                                <Grid.Column className="book">
                                    <Image src="//res.cloudinary.com/johnoblenda/image/upload/v1605840344/libroh/9983887a68f91a927a95308eb9791e5b_tn82mf.png" />
                                </Grid.Column>
                                <Grid.Column className="book">
                                    <Image src="//res.cloudinary.com/johnoblenda/image/upload/v1605840344/libroh/9983887a68f91a927a95308eb9791e5b_tn82mf.png" />
                                </Grid.Column>
                                <Grid.Column className="book">
                                    <Image src="//res.cloudinary.com/johnoblenda/image/upload/v1605840344/libroh/9983887a68f91a927a95308eb9791e5b_tn82mf.png" />
                                </Grid.Column>
                                <Grid.Column className="book">
                                    <Image src="//res.cloudinary.com/johnoblenda/image/upload/v1605840344/libroh/9983887a68f91a927a95308eb9791e5b_tn82mf.png" />
                                </Grid.Column>
                                <Grid.Column className="book">
                                    <Image src="//cdn3.vectorstock.com/i/1000x1000/43/07/vintage-book-cover-vector-22334307.jpg" />
                                </Grid.Column>
                                <Grid.Column className="book">
                                    <Image src="//edit.org/img/blog/xm68-book-cover-templates.jpg.pagespeed.ic.UkmaX_Yea1.jpg" />
                                </Grid.Column>
                                <Grid.Column className="book">
                                    <Image src="//res.cloudinary.com/johnoblenda/image/upload/v1605840344/libroh/9983887a68f91a927a95308eb9791e5b_tn82mf.png" />
                                </Grid.Column>
                                <Grid.Column className="book">
                                    <Image src="//res.cloudinary.com/johnoblenda/image/upload/v1605840344/libroh/9983887a68f91a927a95308eb9791e5b_tn82mf.png" />
                                </Grid.Column>
                                <Grid.Column className="book">
                                    <Image src="//res.cloudinary.com/johnoblenda/image/upload/v1605840344/libroh/9983887a68f91a927a95308eb9791e5b_tn82mf.png" />
                                </Grid.Column>
                                <Grid.Column className="book">
                                    <Image src="//res.cloudinary.com/johnoblenda/image/upload/v1605840344/libroh/9983887a68f91a927a95308eb9791e5b_tn82mf.png" />
                                </Grid.Column>
                                <Grid.Column className="book">
                                    <Image src="//res.cloudinary.com/johnoblenda/image/upload/v1605840344/libroh/9983887a68f91a927a95308eb9791e5b_tn82mf.png" />
                                </Grid.Column>
                                <Grid.Column className="book">
                                    <Image src="//cdn3.vectorstock.com/i/1000x1000/43/07/vintage-book-cover-vector-22334307.jpg" />
                                </Grid.Column>
                                <Grid.Column className="book">
                                    <Image src="//edit.org/img/blog/xm68-book-cover-templates.jpg.pagespeed.ic.UkmaX_Yea1.jpg" />
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            <Footer />
        </>
    );
};

export default Home;
