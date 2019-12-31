import groups from "./groups_reducer";
import { combineReducers } from "redux";

const entitiesReducer = combineReducers({
  groups
});

export default entitiesReducer;