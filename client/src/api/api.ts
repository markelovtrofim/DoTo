import axios from 'axios';
import {TodoType, UserDataType} from "../types/types";

const instance = axios.create({
  baseURL: 'http://localhost:5000/'
});

export const authAPI = {
  registration({email, name, password}: UserDataType) {
    return instance.post('api/auth/registration', {email, name, password})
      .then(response => response.data);
  },
  login({email, password}: UserDataType) {
    return instance.post('api/auth/login', {email, password})
      .then(response => response.data);
  }
};

export const todoAPI = {
  getTodos(userId: string) {
    return instance.get('api/todo/', {
      headers: {
        'Content-Type': 'application/json'
      },
      params: {userId}
    }).then(response => {
      console.log(response.data);
      return response.data
    });
  },
  postNote({userId, text}: TodoType) {
    return instance.post('api/todo/add', {userId, text})
      .then(response => response.data);
  },
};