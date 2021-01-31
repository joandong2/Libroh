import React from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import { userLogout } from "./redux/actions/users";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import cookies from "js-cookies";

import Home from "./components/frontend/public/Home.js";
import Login from "./components/frontend/public/Login.js";
import Signup from "./components/frontend/public/Signup.js";
import Forget from "./components/frontend/public/Forget.js";
import Reset from "./components/frontend/public/Reset.js";
import Book from "./components/frontend/public/Book.js";
import Error from "./components/frontend/public/Error.js";
/* Protected*/
import PrivateRoute from "./components/frontend/protected/PrivateRoute.js";
import Profile from "./components/frontend/protected/Profile.js";
import MyBook from "./components/frontend/protected/MyBooks";

const App = () => {
    const dispatch = useDispatch();
    return (
        <Router>
            <div className="App">
                <Switch>
                    <PrivateRoute exact path="/profile" component={Profile} />
                    <PrivateRoute exact path="/mybook" component={MyBook} />
                    <Route
                        exact
                        path="/"
                        render={(props) => <Home {...props} />}
                    />
                    <Route
                        exact
                        path="/category/:category"
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
                        render={() => {
                            cookies.removeItem("userAccess");
                            dispatch(userLogout());
                        }}
                    />
                    <Route
                        path="/:title"
                        render={(props) => <Book {...props} />}
                    />
                    <Route
                        path="/error"
                        render={(props) => <Error {...props} />}
                    />
                </Switch>
            </div>
        </Router>
    );
};

export default App;
