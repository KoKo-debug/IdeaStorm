import axios from 'axios';

export const getUserGroups = id => {
  return axios.get(`/api/groups/user/${id}`);
};

export const joinGroup = (userId, joinCode) => {
  return axios.post('/api/groups/join', userId, joinCode);
};

// export const createGroup = (userId, name) => {
//   return axios.post('/api/group/create', userId, name);
// };