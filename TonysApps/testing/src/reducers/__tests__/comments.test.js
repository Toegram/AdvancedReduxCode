import commentsReducer from "../comments.js";
import { SAVE_COMMENT } from "../../actions/types.js";

it("handles actions of type SAVE_COMMENT", () => {
  const action = {
    type: SAVE_COMMENT,
    payload: "new comment"
  };
  const newState = commentsReducer([], action);
  expect(newState).toEqual(["new comment"]);
});

it("handles unknock action types as default", () => {
  const action = {
    type: "DEFAULT",
    payload: "new comment"
  };
  const newState = commentsReducer([], action);
  expect(newState).toEqual([]);
});
