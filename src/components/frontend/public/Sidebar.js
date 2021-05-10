import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Col, Badge } from "antd";
import { getCategories } from "../../../redux/actions/books";

const Sidebar = () => {
  //const notifications = useSelector((state) => state.notifications);
  const categories = useSelector(state => state.books.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <Col className="sidebar" span={5} align="left">
      {categories &&
        categories.categories.map((category, index) => {
          return (
            // <Label as="a" key={index} href={`/category/${category.slug}`}>
            //   {category.name}
            //   <Label.Detail>
            //     {category.books ? category.books : 0}
            //   </Label.Detail>
            // </Label>
            <Badge count={category.books ? category.books : 0}>
              <a href={`/category/${category.slug}`}>{category.name}</a>
            </Badge>
          );
        })}

      {/* <Image
        style={{ marginTop: "20px" }}
        src="https://media.sproutsocial.com/uploads/2018/05/Facebook-Ad-Examples.png"
      />
      <Image
        style={{ marginTop: "20px" }}
        src="https://media.sproutsocial.com/uploads/2018/05/Facebook-Ad-Examples.png"
      /> */}
    </Col>
  );
};

export default Sidebar;
