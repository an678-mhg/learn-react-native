import axios from "axios";
import { API_KEY, BASE_URL } from "./contanst";

const client = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

export default client;
