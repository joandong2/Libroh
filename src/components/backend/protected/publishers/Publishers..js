import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col, Table, Avatar, Space, Button, Modal, Alert } from "antd";
import Header from "../Header";
import Footer from "../Footer";
import { getAuthors, deleteAuthor } from "../../../../redux/actions/authors";

const Publishers = props => {
  //const { register, handleSubmit, errors } = useForm();
  const notifications = useSelector(state => state.notifications);
  const authors = useSelector(state => state.authors);
  const dispatch = useDispatch();
  const [delConfirm, setDelConfirm] = useState(false);
  const [delState, delDelState] = useState();

  useEffect(() => {
    dispatch(getAuthors());
  }, [dispatch]);

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id"
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name"
    },
    {
      title: "Slug",
      dataIndex: "slug",
      key: "slug"
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <Button
            size="small"
            type="ghost"
            href={`/authors/${record.slug}`}
            target="_blank"
            rel="noopener"
          >
            View
          </Button>
          <Button
            size="small"
            type="danger"
            onClick={() => {
              delDelState(record.id);
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
    !notifications.loading && authors.authors !== null
      ? authors.authors.map(author => ({
          id: author.id,
          name: author.name,
          slug: author.slug
        }))
      : null;

  const deleteCallback = id => {
    dispatch(deleteAuthor(id));
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
            Authors{" "}
            <Button size="small" type="primary" href="/admin/authors/add">
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
          onOk={() => deleteCallback(delState)}
          onCancel={() => setDelConfirm(false)}
          okText="Ok"
          cancelText="Cancel"
        >
          Delete Author?
        </Modal>
      </Row>
    </div>
  );
};

export default Publishers;
