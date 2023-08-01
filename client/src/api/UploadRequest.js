import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }

  return req;
});

export const uploadImage = async(data) => {
  console.log('data to be uploaded',data);
  API.post("/upload/", data)
};
export const uploadPost = (data) => API.post("/posts", data);
