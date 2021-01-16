import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/frontend/public/Home.js";
import Login from "./components/frontend/public/Login.js";

const App = () => {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route
                        exact
                        path="/"
                        render={(props) => <Home {...props} />}
                    />
                    <Route
                        exact
                        path="/login"
                        render={(props) => <Login {...props} />}
                    />

                    {/* 
                    <PrivateRoute exact path="/articles" component={Articles} /> */}
                </Switch>
            </div>
        </Router>
    );
};

export default App;
