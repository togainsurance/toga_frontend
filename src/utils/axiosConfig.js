import axios from 'axios';
const instance = axios.create({
  // baseURL: 'https://7ba4204ed466.ngrok.io/api/v1/',
  // baseURL: 'http://127.0.0.1:3000/api/v1/',
  baseURL: 'https://toga-backend.herokuapp.com/api/v1/',
});

export const getToken = async () => {
  const userToken = await localStorage.getItem('userToken');
  const token = JSON.parse(userToken);
  return token || '';
};
export default instance;
