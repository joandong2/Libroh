import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col, Table, Avatar, Space, Button, Modal, Alert } from "antd";
import Header from "../Header";
import Footer from "../Footer";
import { getBooks, deleteBookById } from "../../../../redux/actions/books";

const Books = props => {
  //const { register, handleSubmit, errors } = useForm();
  const notifications = useSelector(state => state.notifications);
  const books = useSelector(state => state.books);
  const dispatch = useDispatch();
  const [delConfirm, setDelConfirm] = useState(false);
  const [delBook, setDelBook] = useState();

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
            href={`/${record.slug}`}
            target="_blank"
            rel="noopener"
          >
            View
          </Button>
          <Button
            size="small"
            type="primary"
            href={`/admin/books/${record.slug}/edit`}
          >
            Edit
          </Button>
          <Button
            size="small"
            type="danger"
            //href={`/admin/book/${record.id}/delete`}
            onClick={() => {
              setDelBook(record.id);
              setDelConfirm(true);
            }}
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
      slug: book.slug,
      cover: book.cover,
      author: book.author_name,
      publisher: book.publisher_name
    }));

  const deleteBook = id => {
    dispatch(deleteBookById(id));
    setDelConfirm(false);
  };

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
          <Col span={12}>
            <div className="loader-wrapper" align="center">
              {notifications.loading && <div className="loader"></div>}
            </div>

            {notifications.message && (
              <Alert message={notifications.message} type="warning" showIcon />
            )}
          </Col>
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
        <Modal
          title="Modal"
          visible={delConfirm}
          onOk={() => deleteBook(delBook)}
          onCancel={() => setDelConfirm(false)}
          okText="Ok"
          cancelText="Cancel"
        >
          Delete Book?
        </Modal>
      </Row>
    </div>
  );
};

export default Books;
