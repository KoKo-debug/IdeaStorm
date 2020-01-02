import { RECEIVE_USER_GROUPS } from "../actions/groups_actions";

const GroupsReducer = ( state = {}, action ) => {
  let newState;
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER_GROUPS:
      return Object.assign({},action.groups.data);
    default:
      return state;
  }
};

export default GroupsReducer;