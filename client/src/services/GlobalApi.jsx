// src/services/GlobalApi.js

import axios from 'axios';
import config from '../config/config';

const GlobalApi = axios.create({
  baseURL: config.baseURL
});

export const getBlogs = axios.get('/blog?populate=*');

export const getBlogById = async (id) => {
  try {
    const response = await axios.get(`/blog/articles/${id}?populate=*`);
    return response.data;
  } catch (error) {
    console.error('Error fetching blog article:', error);
    throw error;
  }
};

export default GlobalApi