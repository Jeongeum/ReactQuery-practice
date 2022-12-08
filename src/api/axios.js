import axios from "axios";
const apiUrl = "https://jsonplaceholder.typicode.com";

const instance = axios.create({
  baseURL: apiUrl,
  headers: { "Content-type": "application/json; charset=UTF-8" },
});

export const getTodos = async () => {
  const response = await instance.get("/posts");
  return response.data;
};

export const getTodosDetail = async (id) => {
  const response = await instance.get(`/posts/${id}`);
  return response.data;
};
