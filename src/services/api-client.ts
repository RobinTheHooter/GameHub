import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "72f3a4bacd14460aaab8c3d3d1538d72",
  },
});
