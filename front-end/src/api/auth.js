import api from "./init";

export function init(handleError, signOut) {}

export function signIn({ email, password }) {
  return api
    .post(`/auth`, {
      email: email,
      password: password
    })
    .then(res => {
      return res.data;
    })
    .catch(error => {
      throw Error(error.response.data.error);
    });
}
export function send() {
  return api
    .post(`/verify/send`, {})
    .then(res => {
      return res;
    })
    .catch(error => {
      throw Error(error.response.data.error);
    });
}
export function confirm(code, state) {
  return api
    .post(`/verify/confirm`, { id: code, state: state })
    .then(res => {
      return res;
    })
    .catch(error => {
      throw Error(error.response.data.error);
    });
}

export function register() {
  return api
    .post(`/verify/send`, {})
    .then(res => {
      return res;
    })
    .catch(error => {
      throw Error(error.response.data.error);
    });
  // return api
  //   .post(`/auth/register`, {
  //     email: email,
  //     password: password,
  //     firstName: firstName,
  //     lastName: lastName
  //   })
  //   .then(res => {
  //     console.log("res");
  //     console.log(res);
  //     return res;
  //   })
  //   .catch(error => {
  //     throw Error(error.message);
  //   });
}
// export function register({ email, password }) {
//     return api.post('/auth/register', {
//         email,
//         password
//     }).then(res => res.data)
// }
