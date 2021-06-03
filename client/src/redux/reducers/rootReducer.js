import { combineReducers } from "redux";
import { StudentReducer } from "./studentReducer";
import { FacultyReducer } from "./facultyReducer";

const rootReducer = combineReducers({
  student: StudentReducer,
  faculty: FacultyReducer,
});

export default rootReducer;
