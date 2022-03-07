import { combineReducers } from "redux";
import NotesReducer from "./notesReducer";
// import reducer from "./reducer";

export const rootReducer = combineReducers({Notes: NotesReducer})