import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { useForm } from "react-hook-form";
import { Grid, Card, Image } from "semantic-ui-react";
import { Line } from 'react-chartjs-2'
import Header from "./Header";

const Dashboard = (props) => {
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
                data: [{
                    x: "04/01", y: 175
                }, {
                    x: "04/02", y: 20
                }, {
                    x: "04/03", y: 11
                }, {
                    x: "04/04", y: 190
                }, {
                    x: "04/05", y: 20
                }, {
                    x: "04/06", y: 44
                }, {
                    x: "04/07", y: 50
                }, {
                    x: "04/08", y: 120
                }, {
                    x: "04/09", y: 120
                }, {
                    x: "04/10", y: 110
                }, {
                    x: "04/11", y: 110
                }, {
                    x: "04/12", y: 110
                }, {
                    x: "04/13", y: 110
                }, {
                    x: "04/14", y: 110
                }, {
                    x: "04/15", y: 140
                }, {
                    x: "04/16", y: 140
                }, {
                    x: "04/17", y: 7
                }, {
                    x: "04/18", y: 8
                }, {
                    x: "04/19", y: 16
                }, {
                    x: "04/20", y: 15
                }, {
                    x: "04/21", y: 11
                }],
                fill: false,
                borderColor: 'red'
            },
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
            scales:     {
                xAxes: [{
                    type: "time",
                    time:  {
                        format: 'MM-DD',
                        tooltipFormat: 'll'
                    },
                    scaleLabel: {
                        display:     true,
                        labelString: 'Date'
                    }
                }],
                yAxes: [{
                    scaleLabel: {
                        display:     true,
                        labelString: 'views'
                    }
                }]
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
                        <Grid.Column align="left" width={12}>
                            <Card fluid>
                                <Card.Content header='Site Traffic' className="page-title" />
                                <Card.Content extra>
                                    <Line data={data} options={options} />
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                        <Grid.Column align="right" width={4}>
                            right 
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Grid>
        </div>
    );
};

export default Dashboard;