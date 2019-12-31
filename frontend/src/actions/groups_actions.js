import { getUserGroups } from "../util/groups_util";

export const RECEIVE_USER_GROUPS = "RECEIVE_USER_GROUPS";

export const receiveUserGroups = groups => {
  return({
    type: RECEIVE_USER_GROUPS,
    groups
  });
};

export const fetchUserGroups = id => dispatch => {
  return(
    getUserGroups(id)
      .then(myGroups => dispatch(receiveUserGroups(myGroups)))
  );
};

