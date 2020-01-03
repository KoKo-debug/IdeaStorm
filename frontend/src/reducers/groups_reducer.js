import { RECEIVE_USER_GROUPS, RECEIVE_USER_GROUP } from "../actions/groups_actions";

const GroupsReducer = ( state = {}, action ) => {
  // let newState;
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER_GROUPS:
      return Object.assign({},action.groups.data);
    case RECEIVE_USER_GROUP:
      return Object.assign({}, state, action.group.data);
    default:
      return state;
  }
};

export default GroupsReducer;