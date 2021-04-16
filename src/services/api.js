import axios from "axios";

const api = axios.create({
  baseURL: "https://backend-geekload.herokuapp.com"
});

export default api;
