import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Grid, Label, Image } from "semantic-ui-react";
import { getCategories } from "../../../redux/actions/books";

const Sidebar = () => {
  //const notifications = useSelector((state) => state.notifications);
  const categories = useSelector(state => state.books.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <Grid.Column className="sidebar" width={3} align="left">
      <Label.Group>
        {categories &&
          categories.categories.map((category, index) => {
            return (
              <Label as="a" key={index} href={`/category/${category.slug}`}>
                {category.name}
                <Label.Detail>
                  {category.books ? category.books : 0}
                </Label.Detail>
              </Label>
            );
          })}
      </Label.Group>
      <Image
        style={{ marginTop: "20px" }}
        src="https://media.sproutsocial.com/uploads/2018/05/Facebook-Ad-Examples.png"
      />
      <Image
        style={{ marginTop: "20px" }}
        src="https://media.sproutsocial.com/uploads/2018/05/Facebook-Ad-Examples.png"
      />
    </Grid.Column>
  );
};

export default Sidebar;
