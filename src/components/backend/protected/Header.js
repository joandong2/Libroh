import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { useForm } from "react-hook-form";
import { Grid, Card, Image } from "semantic-ui-react";
import TopMenu from "./TopMenu";

// import Header from "../public/Header";
// import Footer from "../public/Footer";

const Header = props => {
  //const { register, handleSubmit, errors } = useForm();
  //const notifications = useSelector((state) => state.notifications);
  //const dispatch = useDispatch();
  //const onSubmit = (data) => dispatch(userLogin(data));

  return (
    <>
      <Grid padded className="panel">
        <Grid container>
          <Grid.Row columns={2}>
            <Grid.Column align="left" className="left-panel" width={13}>
              <Image src="//res.cloudinary.com/johnoblenda/image/upload/v1609210738/libroh/logo_lwyvsj.png" />
              <TopMenu />
            </Grid.Column>
            <Grid.Column align="right" width={3}>
              right
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Grid>
    </>
  );
};

export default Header;
