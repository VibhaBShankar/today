import axios from "axios";

const API_URL =
  "https://jsonplaceholder.typicode.com/posts";

export const getPosts = () => {
  return axios.get(API_URL);
};