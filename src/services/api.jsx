// src/services/api.js
import axios from 'axios';
import config from '../config/config';

const api = axios.create({
  baseURL: config.baseURL
});

export const getBlogById = (id) => api.get(`/blog/articles/${id}`);
