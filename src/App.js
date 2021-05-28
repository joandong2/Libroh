import React from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import { userLogout } from "./redux/actions/users";
import { adminLogout } from "./redux/actions/admins";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import cookies from "js-cookies";

import Home from "./components/frontend/public/Home.js";
import Login from "./components/frontend/public/Login.js";
import Signup from "./components/frontend/public/Signup.js";
import Forget from "./components/frontend/public/Forget.js";
import Reset from "./components/frontend/public/Reset.js";
import Book from "./components/frontend/public/Book.js";
import Error from "./components/frontend/public/Error.js";
import Donate from "./components/frontend/public/Donate";
/* Protected*/
import PrivateRoute from "./components/frontend/protected/PrivateRoute.js";
import Profile from "./components/frontend/protected/Profile.js";
import MyBook from "./components/frontend/protected/MyBooks";
/* Admin */
import AdminLogin from "./components/backend/public/Login.js";
import AdminRoute from "./components/backend/protected/AdminRoute.js";
import Dashboard from "./components/backend/protected/Dashboard.js";
import Books from "./components/backend/protected/books/Books.js";
import AddBook from "./components/backend/protected/books/AddBook.js";
import EditBook from "./components/backend/protected/books/EditBook";
import BooksCategories from "./components/backend/protected/books/Categories";
import AddCategory from "./components/backend/protected/books/AddCategory";

const App = () => {
  const dispatch = useDispatch();
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route
            exact
            path="/admin"
            render={props => <AdminLogin {...props} />}
          />
          <AdminRoute exact path="/admin/dashboard" component={Dashboard} />
          <AdminRoute exact path="/admin/books" component={Books} />
          <AdminRoute exact path="/admin/books/add" component={AddBook} />
          <AdminRoute
            exact
            path="/admin/books/:slug/edit"
            component={EditBook}
          />
          <AdminRoute
            exact
            path="/admin/books/categories"
            component={BooksCategories}
          />
          <AdminRoute
            exact
            path="/admin/books/categories/add"
            component={AddCategory}
          />
          <AdminRoute
            exact
            path="/admin/logout"
            render={() => {
              cookies.removeItem("adminAccessToken");
              cookies.removeItem("_adminAccessSession");
              dispatch(adminLogout());
            }}
          />

          {/* Private Frontend Routes */}
          <PrivateRoute exact path="/profile" component={Profile} />
          <PrivateRoute exact path="/mybook" component={MyBook} />
          <Route exact path="/" render={props => <Home {...props} />} />
          <Route
            exact
            path="/category/:category"
            render={props => <Home {...props} />}
          />
          <Route exact path="/login" render={props => <Login {...props} />} />
          <Route exact path="/signup" render={props => <Signup {...props} />} />
          <Route exact path="/forget" render={props => <Forget {...props} />} />
          <Route
            exact
            path="/reset-password"
            render={props => <Reset {...props} />}
          />
          <Route exact path="/donate" render={props => <Donate {...props} />} />
          <Route
            exact
            path="/logout"
            render={() => {
              cookies.removeItem("userAccess");
              dispatch(userLogout());
            }}
          />
          <Route path="/:title" render={props => <Book {...props} />} />
          <Route path="/error" render={props => <Error {...props} />} />
          {/** ADMIN */}
        </Switch>
      </div>
    </Router>
  );
};

export default App;
