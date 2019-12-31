import axios from 'axios';

export const getUserGroups = id => {
  return axios.get(`/api/groups/user/${id}`);
};