import axios from "axios";
const api = axios.create({
  baseURL: "https://staging.api.faculdadefamart.edu.br/api",
});

export default api;
