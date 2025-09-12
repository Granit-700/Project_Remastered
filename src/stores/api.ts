import axios from "axios";

export const api = axios.create({
  baseURL: "https://erjanhoo.pythonanywhere.com",
});
