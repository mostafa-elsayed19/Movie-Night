import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie/",
  headers: {
    "Content-Type": "application/json",
  },
  params: {
    api_key: "5cbc6bbb6520dd65aea036176b0e937c",
  },
});

// I can handle logic on this interceptors
// axiosInstance.interceptors.request.use(
//   (req) => {
//     console.log(req);
//     return req;
//   },
//   (err) => {
//     return Promise.reject(err);
//   }
// );
// axiosInstance.interceptors.response.use(
//   (res) => {
//     console.log(res);
//     return res;
//   },
//   () => {}
// );

export default axiosInstance;
