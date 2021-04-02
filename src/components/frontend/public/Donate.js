import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { Button, Form, Grid, Icon, List, Message } from "semantic-ui-react";
import { donateBook } from "../../../redux/actions/users";

import Header from "../public/Header";
import Footer from "../public/Footer";

const Donate = props => {
  const { register, handleSubmit, errors } = useForm();
  const notifications = useSelector(state => state.notifications);
  const dispatch = useDispatch();
  const onSubmit = data => dispatch(donateBook(data));

  return (
    <>
      <Header />
      <Grid
        textAlign="center"
        style={{ height: "60vh" }}
        verticalAlign="middle"
        columns={2}
      >
        <Grid.Row style={{ maxWidth: 980 }}>
          <Grid.Column textAlign="left">
            <h2>Libroh</h2>
            <p>
              Bacon ipsum dolor amet shoulder burgdoggen sausage biltong. Short
              ribs short loin ham chislic porchetta. Buffalo pancetta drumstick,
              shank kevin ground round alcatra ribeye. Fatback tongue ham hock,
              chislic pig rump t-bone swine tri-tip jerky shankle venison
              biltong spare ribs. Chicken sausage frankfurter brisket jowl
              tri-tip tail kielbasa landjaeger alcatra ball tip rump ribeye cow
              pig. Tri-tip pastrami chicken, shoulder pork loin corned beef
              shank cow tenderloin venison ground round. Shank tenderloin salami
              rump jerky.
            </p>
            <div className="contact">
              <List>
                <List.Item
                  icon="home"
                  content="Dona Maria Subd., Pala-o Iligan City, PH 9200"
                />
                <List.Item
                  icon="phone"
                  content="+63 908 935
                        6662"
                />
                <List.Item
                  icon="mail"
                  content={
                    <a href="mailto:libroh.ph@gmail.comm">
                      libroh.ph@gmail.com
                    </a>
                  }
                />
              </List>
            </div>
          </Grid.Column>
          <Grid.Column>
            <div className="loader-wrapper" align="center">
              {notifications.loading && <div className="loader"></div>}
            </div>

            {notifications.message && (
              <Message color="red" size="small">
                {notifications.message}
              </Message>
            )}

            <Form size="large" onSubmit={handleSubmit(onSubmit)}>
              <div className="field">
                <div className="ui fluid left icon input">
                  <input
                    name="name"
                    placeholder="Name"
                    ref={register({
                      required: "Name is required."
                    })}
                  />
                  <i aria-hidden="true" className="user icon"></i>
                </div>
                {errors.name && (
                  <p className="errors">
                    <Icon name="arrow circle right" /> {errors.name.message}
                  </p>
                )}
              </div>
              <div className="field">
                <div className="ui fluid left icon input">
                  <input
                    name="email"
                    placeholder="Email address"
                    ref={register({
                      required: "Email address is required.",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address."
                      }
                    })}
                  />
                  <i aria-hidden="true" className="mail icon"></i>
                </div>
                {errors.email && (
                  <p className="errors">
                    <Icon name="arrow circle right" /> {errors.email.message}
                  </p>
                )}
              </div>
              <div className="field">
                <div className="ui fluid left icon input">
                  <input
                    name="phone"
                    placeholder="Phone Number"
                    ref={register({
                      pattern: {
                        value: /[0-9]*/i,
                        message: "Invalid phone number."
                      }
                    })}
                  />
                  <i aria-hidden="true" className="phone icon"></i>
                </div>
                {errors.phone && (
                  <p className="errors">
                    <Icon name="arrow circle right" /> {errors.phone.message}
                  </p>
                )}
              </div>
              <div className="field">
                <div className="ui fluid left icon input">
                  <textarea
                    name="message"
                    placeholder="Message"
                    ref={register({
                      required: "Message is required."
                    })}
                  />
                  <i aria-hidden="true" className="clone icon"></i>
                </div>
                {errors.message && (
                  <p className="errors">
                    <Icon name="arrow circle right" /> {errors.message.message}
                  </p>
                )}
              </div>

              <Button fluid size="small">
                Donate
              </Button>
            </Form>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Footer />
    </>
  );
};

export default Donate;
