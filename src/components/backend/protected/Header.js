import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { useForm } from "react-hook-form";
import { Row, Col } from "antd";
import TopMenu from "./TopMenu";

// import Header from "../public/Header";
// import Footer from "../public/Footer";

const Header = (props) => {
  //const { register, handleSubmit, errors } = useForm();
  //const notifications = useSelector((state) => state.notifications);
  //const dispatch = useDispatch();
  //const onSubmit = (data) => dispatch(userLogin(data));

  return (
    <>
      <Row gutter={24}>
        <Col align="left" span={22}>
          <TopMenu />
        </Col>
        <Col span={2} align="right" className="navigation">
          <a rel="noopener noreferrer" href="/admin/logout">
            Logout
          </a>
        </Col>
      </Row>
    </>
  );
};

export default Header;
