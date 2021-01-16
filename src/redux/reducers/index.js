import { combineReducers } from "redux";
import { users } from "./users.js";
import { notifications } from "./notifications.js";

export const reducer = combineReducers({ users, notifications });
