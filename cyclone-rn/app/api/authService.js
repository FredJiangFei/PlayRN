import client from './client';

let token = '';

const login = (email, password) => {
  return client.post('login', {
    email,
    password,
  });
};

const isLogin = () => !!token;

export default {
  login,
  isLogin,
};
