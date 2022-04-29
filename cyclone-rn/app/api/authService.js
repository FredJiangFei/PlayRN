import client from './client';

const login = (email, password) => {
  return client.post('login', {
    email,
    password,
  });
};

export default {
  login,
};
