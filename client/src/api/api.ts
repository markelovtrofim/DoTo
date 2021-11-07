import axios from 'axios';
import {UserDataType} from "../types/types";

const instance = axios.create({
  baseURL: 'http://localhost:5000/api/'
});

export const authAPI = {
  registration({email, name, password}: UserDataType) {
    return instance.post('auth/registration', {email, name, password})
      .then(response => response.data);
  },
  // login(email: string, name: string) {},
  // logout() {}
};