import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { useForm } from "react-hook-form";
import { Grid, Card, Icon } from "semantic-ui-react";
import { Line } from "react-chartjs-2";
import Header from "./Header";
import Footer from "./Footer";

const Dashboard = props => {
  //const { register, handleSubmit, errors } = useForm();
  //const notifications = useSelector((state) => state.notifications);
  //const dispatch = useDispatch();
  //const onSubmit = (data) => dispatch(userLogin(data));
  // var startDate = moment().subtract(1, 'months').format('MM-DD');
  // var endDate = moment().format('MM-DD');

  const data = {
    datasets: [
      {
        label: "Views",
        data: [
          {
            x: "04/01",
            y: 175
          },
          {
            x: "04/02",
            y: 20
          },
          {
            x: "04/03",
            y: 11
          },
          {
            x: "04/04",
            y: 190
          },
          {
            x: "04/05",
            y: 20
          },
          {
            x: "04/06",
            y: 44
          },
          {
            x: "04/07",
            y: 50
          },
          {
            x: "04/08",
            y: 120
          },
          {
            x: "04/09",
            y: 120
          },
          {
            x: "04/10",
            y: 110
          },
          {
            x: "04/11",
            y: 110
          },
          {
            x: "04/12",
            y: 110
          },
          {
            x: "04/13",
            y: 110
          },
          {
            x: "04/14",
            y: 110
          },
          {
            x: "04/15",
            y: 140
          },
          {
            x: "04/16",
            y: 140
          },
          {
            x: "04/17",
            y: 7
          },
          {
            x: "04/18",
            y: 8
          },
          {
            x: "04/19",
            y: 16
          },
          {
            x: "04/20",
            y: 15
          },
          {
            x: "04/21",
            y: 11
          }
        ],
        fill: false,
        borderColor: "red"
      }
      // {
      //     label: "UK Dates",
      //     data:  [{
      //         x: "01/04/2014", y: 175
      //     }, {
      //         x: "01/10/2014", y: 175
      //     }, {
      //         x: "01/04/2015", y: 178
      //     }, {
      //         x: "01/10/2015", y: 178
      //     }],
      //     fill:  false,
      //     borderColor: 'blue'
      // }
    ]
  };

  const options = {
    responsive: true,
    scales: {
      xAxes: [
        {
          type: "time",
          time: {
            format: "MM-DD",
            tooltipFormat: "ll"
          },
          scaleLabel: {
            display: true,
            labelString: "Date"
          }
        }
      ],
      yAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: "views"
          }
        }
      ]
    }
  };

  return (
    <div className="wrapper">
      <Header />

      <Grid padded className="title-box">
        <Grid container>
          <h3 className="page-title">Dashboard</h3>
        </Grid>
      </Grid>

      <Grid padded className="dashboard-boxes">
        <Grid container>
          <Grid.Row columns={2}>
            <Grid.Column align="left" width={10}>
              <Card fluid>
                <Card.Content header="Site Traffic" className="page-title" />
                <Card.Content extra>
                  <Line data={data} options={options} />
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column align="right" width={6}>
              <div className="stats">
                <Card fluid>
                  <Card.Content extra>
                    <Grid>
                      <Grid.Row>
                        <Grid.Column width={2}>
                          <Icon bordered inverted color="teal" name="users" />
                        </Grid.Column>
                        <Grid.Column width={8} textAlign="left">
                          <p>4032 Users</p>
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                  </Card.Content>
                </Card>
                <Card fluid>
                  <Card.Content extra>
                    <Grid>
                      <Grid.Row>
                        <Grid.Column width={2}>
                          <Icon bordered inverted color="red" name="book" />
                        </Grid.Column>
                        <Grid.Column width={8} textAlign="left">
                          <p>888 Books</p>
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                  </Card.Content>
                </Card>
                <Card fluid>
                  <Card.Content extra>
                    <Grid>
                      <Grid.Row>
                        <Grid.Column width={2}>
                          <Icon bordered inverted color="blue" name="users" />
                        </Grid.Column>
                        <Grid.Column width={8} textAlign="left">
                          <p>4032 Authors</p>
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                  </Card.Content>
                </Card>
                <Card fluid>
                  <Card.Content extra>
                    <Grid>
                      <Grid.Row>
                        <Grid.Column width={2}>
                          <Icon bordered inverted color="yellow" name="users" />
                        </Grid.Column>
                        <Grid.Column width={8} textAlign="left">
                          <p>322 Publishers</p>
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                  </Card.Content>
                </Card>
                <Card fluid>
                  <Card.Content extra>
                    <Grid>
                      <Grid.Row>
                        <Grid.Column width={2}>
                          <Icon bordered inverted color="orange" name="users" />
                        </Grid.Column>
                        <Grid.Column width={8} textAlign="left">
                          <p>32200 Site Visits</p>
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                  </Card.Content>
                </Card>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Grid>

      <Footer />
    </div>
  );
};

export default Dashboard;