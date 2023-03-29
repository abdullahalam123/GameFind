import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "5641afedbf3343f3aadf914561e9422f",
  },
});
