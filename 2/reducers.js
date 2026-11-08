import _ from "lodash";
import { combineReducers } from "redux";

const comments = (state = {}, action) => {
  // BEGIN (write your solution here)
  switch (action.type) {
    case "TASK_COMMENT_ADD":
      return {
        ...state,
        [action.payload.comment.id]: action.payload.comment,
      };

    case "TASK_COMMENT_REMOVE":
      return _.omit(state, action.payload.id);

    case "TASK_REMOVE": {
      const taskId = action.payload.id;
      return _.omitBy(state, (comment) => comment.taskId === taskId);
    }
    default:
      return state;
  }
  // END
};

const tasks = (state = {}, action) => {
  // BEGIN (write your solution here)
  switch (action.type) {
    case "TASK_ADD":
      return {
        ...state,
        [action.payload.task.id]: action.payload.task,
      };

    case "TASK_REMOVE":
      return _.omit(state, action.payload.id);
    default:
      return state;
  }
  // END
};

export default combineReducers({
  comments,
  tasks,
});
