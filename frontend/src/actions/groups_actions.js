import { getUserGroups, joinGroup } from "../util/groups_util";

export const RECEIVE_USER_GROUPS = "RECEIVE_USER_GROUPS";
export const RECEIVE_USER_GROUP = "RECEIVE_USER_GROUP";

export const receiveUserGroups = groups => {
  return({
    type: RECEIVE_USER_GROUPS,
    groups
  });
};

export const receiveUserGroup = group => {
  return({
    type: RECEIVE_USER_GROUP,
    group
  });
};

export const fetchUserGroups = id => dispatch => {
  return(
    getUserGroups(id)
      .then(myGroups => dispatch(receiveUserGroups(myGroups)))
  );
};


export const joinUserGroup = (userId, joinCode) => dispatch => {
  return (
      joinGroup(userId, joinCode)
        .then(group => dispatch(receiveUserGroup(group)))
  );
};