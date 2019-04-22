import axios from "axios";

const api = axios.create({
  baseURL: "https://16dgqbln9e.execute-api.ap-southeast-1.amazonaws.com/dev/" //process.env.REACT_APP_API_URL
});
// const api = axios.create({
//   baseURL: "http://localhost:8085/" //process.env.REACT_APP_API_URL
// });

// Add a 401 response interceptor
api.interceptors.response.use(undefined, err => {
  const error = err.response;
  // if error is 401
  if (error) {
    if (
      error.status === 401 &&
      error.config &&
      !error.config.__isRetryRequest
    ) {
      localStorage.removeItem("token");
      return this.props.history.push("/");
    }
  }
});

export const setApiToken = token => {
  api.defaults.headers.common["Authorization-Header"] = token;
};

export default api;
