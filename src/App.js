import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/frontend/public/Home.js";
import Login from "./components/frontend/public/Login.js";
import Signup from "./components/frontend/public/Signup.js";
import Forget from "./components/frontend/public/Forget.js";
import Reset from "./components/frontend/public/Reset.js";

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
                    <Route
                        exact
                        path="/signup"
                        render={(props) => <Signup {...props} />}
                    />
                    <Route
                        exact
                        path="/forget"
                        render={(props) => <Forget {...props} />}
                    />
                    <Route
                        exact
                        path="/reset-password"
                        render={(props) => <Reset {...props} />}
                    />
                    <Route
                        exact
                        path="/logout"
                        render={(props) => {
                            <Reset {...props} />;
                        }}
                    />
                    {/* 
                    <PrivateRoute exact path="/articles" component={Articles} /> */}
                </Switch>
            </div>
        </Router>
    );
};

export default App;
