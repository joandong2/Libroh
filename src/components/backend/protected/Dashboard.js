import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { useForm } from "react-hook-form";
import { Grid, Card, Image } from "semantic-ui-react";
import { Bar } from 'react-chartjs-2'
import TopMenu from "./TopMenu";

const Dashboard = (props) => {
    //const { register, handleSubmit, errors } = useForm();
    //const notifications = useSelector((state) => state.notifications);
    //const dispatch = useDispatch();
    //const onSubmit = (data) => dispatch(userLogin(data));

    const data = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: '# of Visitors per day',
            data: [10, 20, 50, 100, 500, 1000],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      }
      
      const options = {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      }

      
    return (
        <div className="top-panel">
            <Grid padded className="panel">
                <Grid container>
                    <Grid.Row columns={2}>
                        <Grid.Column align="left">
                            <Image src="//res.cloudinary.com/johnoblenda/image/upload/v1609210738/libroh/logo_lwyvsj.png" />
                        </Grid.Column>
                        <Grid.Column align="right">
                            right 
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Grid>
            <Grid padded className="panel">
                <Grid container>
                    <Grid.Row columns={2}>
                        <Grid.Column align="left">
                            <TopMenu /> 
                        </Grid.Column>
                        <Grid.Column align="right">
                            right 
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Grid>
            <Grid padded className="page-navigation">
                <Grid container>
                    <Grid.Row columns={2}>
                        <Grid.Column align="left">
                            <h3>Dashboard</h3>
                        </Grid.Column>
                        <Grid.Column align="right">
                            right 
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Grid>
            <Grid padded className="dashboard-boxes">
                <Grid container>
                    <Grid.Row columns={2}>
                        <Grid.Column align="left">
                        <Card fluid>
                            <Card.Content header='Site Traffic' />
                            <Card.Content extra>
                                <Bar data={data} options={options} />
                            </Card.Content>
                        </Card>
                        </Grid.Column>
                        <Grid.Column align="right">
                            right 
                        </Grid.Column>
                        <Grid.Column align="left">
                            <h3>Dashboard</h3>
                        </Grid.Column>
                        <Grid.Column align="right">
                            right 
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Grid>
        </div>
    );
};

export default Dashboard;