import client from './client';

const getUsers = (page) => client.get(`users?page=${page}`);

export default {
  getUsers,
};
