import { combineReducers } from "redux";
import { users } from "./users.js";
import { notifications } from "./notifications.js";
import { books } from "./books.js";

export const reducer = combineReducers({ users, notifications, books });
