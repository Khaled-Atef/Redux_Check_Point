import {
  ADD_TASK,
  REMOVE_TASK,
  EDIT_TASK,
  CLEAR_TASKS,
} from "../Constants/action-types";

const initialState = [];

const Reducer = (state = initialState, action) => {
  let tasks = [];
  if (action.type === ADD_TASK) {
    tasks = [
      ...state,
      {
        text: action.payload.text,
        date: action.payload.date,
        id: Math.random(),
      },
    ];
    console.log("from rootReducer ", tasks);
    return tasks;
  } else if (action.type === REMOVE_TASK) {
    tasks = state.filter((ele) => {
      return ele.id !== action.payload.id;
    });
    console.log("from rootReducer delete ", tasks);
    return tasks;
  } else if (action.type === EDIT_TASK) {
    tasks = [...state];
    const reqValue = tasks.find((ele, index) => {
      if (ele.id === action.payload.id) {
        return ele;
      }
    });
    const index = tasks.indexOf(reqValue);
    tasks.splice(index, 1, action.payload);
    return tasks;
  }
  if (action.type === CLEAR_TASKS) {
    tasks = [];
    return tasks;
  } else {
    return state;
  }
};

export default Reducer;
