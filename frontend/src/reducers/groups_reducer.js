import { RECEIVE_USER_GROUPS } from "../actions/groups_actions";

const GroupsReducer = ( state = {}, action ) => {
  Object.freeze(state);
  switch (action) {
    case RECEIVE_USER_GROUPS:
      return Object.assign({},action.groups);  
    default:
      return state;
  }
};

export default GroupsReducer;