import axios from "axios";

const api = axios.create({
  baseURL: "https://backend-devload.herokuapp.com/"
});

export default api;
