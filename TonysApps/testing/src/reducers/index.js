import { combineReducers } from "redux";
import commentsReducer from "./comments";
import authReducer from "./auth.js";

export default combineReducers({
  comments: commentsReducer,
  auth: authReducer
});
