import { ADD_TASK } from "../Constants/action-types";
import { REMOVE_TASK } from "../Constants/action-types";
import { EDIT_TASK, CLEAR_TASKS } from "../Constants/action-types";

export const add_task = (data) => {
  return {
    type: ADD_TASK,
    payload: {
      text: data.text,
      date: data.date,
    },
  };
};

export const remove_task = (data) => {
  return {
    type: REMOVE_TASK,
    payload: {
      id: data,
    },
  };
};

export const edit_task = (data, y) => {
  return {
    type: EDIT_TASK,
    payload: {
      text: data.editText,
      date: data.editDate,
      id: y,
    },
  };
};

export const clear_task = () => {
  return {
    type: CLEAR_TASKS,
  };
};
