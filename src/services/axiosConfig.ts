import axios from 'axios';

const axiosWrapper = axios.create({
  baseURL: process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL,
});

export default axiosWrapper;
