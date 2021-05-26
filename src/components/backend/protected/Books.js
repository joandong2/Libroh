import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col, Table, Avatar, Space, Button } from "antd";
import Header from "./Header";
import Footer from "./Footer";
import { getBooks } from "../../../redux/actions/books";

const Books = props => {
  //const { register, handleSubmit, errors } = useForm();
  const notifications = useSelector(state => state.notifications);
  const books = useSelector(state => state.books);
  const dispatch = useDispatch();
  //const [pageNum, setPageNum] = useState(1);

  useEffect(() => {
    dispatch(getBooks(undefined, undefined));
  }, [dispatch]);

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id"
    },
    {
      title: "ISBN",
      dataIndex: "isbn",
      key: "isbn"
    },
    {
      dataIndex: "cover",
      key: "cover",
      render: (text, record) => <Avatar src={record.cover} />
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title"
    },
    {
      title: "Author",
      dataIndex: "author",
      key: "author"
    },
    {
      title: "Publisher",
      dataIndex: "publisher",
      key: "publisher"
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <Button
            size="small"
            type="primary"
            href={`/admin/book/${record.id}/edit`}
          >
            Edit
          </Button>
          <Button
            size="small"
            type="danger"
            href={`/admin/book/${record.id}/delete`}
          >
            Delete
          </Button>
        </Space>
      )
    }
  ];

  const data =
    !notifications.loading &&
    books.books &&
    books.books.map(book => ({
      id: book.id,
      isbn: book.isbn,
      title: book.title,
      cover: book.cover,
      author: book.author_name,
      publisher: book.publisher_name
    }));

  // const paginationChange = (e, { activePage }) => {
  //   //console.log(activePage);
  //   setPageNum(parseInt(activePage));
  // };

  //console.log("books", books);

  return (
    <div className="dashboard">
      <div className="header-wrapper">
        <Col span={17} offset={3}>
          <Header />
        </Col>
      </div>
      <Row>
        <Col span={17} offset={3}>
          <h3 className="page-title">
            Books{" "}
            <Button size="small" type="primary" href="/admin/books/add">
              Add New
            </Button>
          </h3>
          <Table
            columns={columns}
            dataSource={data}
            pagination={{
              pageSizeOptions: ["25", "50"],
              showSizeChanger: true
            }}
          />
          <Footer />
        </Col>
      </Row>
    </div>
  );
};

export default Books;
