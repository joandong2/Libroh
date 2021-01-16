import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { reducer } from "./redux/reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import "semantic-ui-css/semantic.min.css";
import "./index.scss";
import App from "./App";

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
