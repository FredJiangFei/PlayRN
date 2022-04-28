import client from './client';

let token = ''

const login = (email, password) => client.post("/auth",  {email, password})

const isLogin = () => !!token

export default {
  login,
  isLogin,
}
