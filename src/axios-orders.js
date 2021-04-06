import axios from "axios";

const instance = axios.create({
  baseURL: "https://my-burger-bcad0-default-rtdb.firebaseio.com/",
});

export default instance;
