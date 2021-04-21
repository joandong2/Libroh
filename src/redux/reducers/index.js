import { combineReducers } from "redux";
import { users } from "./users.js";
import { notifications } from "./notifications.js";
import { books } from "./books.js";
import { authors } from "./authors.js";
import { publishers } from "./publishers.js";

export const reducer = combineReducers({
  users,
  notifications,
  books,
  authors,
  publishers
});
