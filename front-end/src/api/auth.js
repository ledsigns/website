import api from "./init";

export function init(handleError, signOut) {}

export function signIn({ email, password }) {
  return api
    .post(`/auth`, {
      email: email,
      password: password
    })
    .then(res => {
      console.log(res);
      console.log(res.error);
      return res.data;
    })
    .catch(error => {
      throw Error(error.response.data.error);
    });
}
export function test({ email, password }) {
  return api
    .post(`/auth/test`)
    .then(res => {
      console.log(res);
      console.log(res.error);
      console.log("data");
      console.log(res);
      return;
      // return res.data;
    })
    .catch(error => {
      throw Error(error.response.data.error);
    });
}

export function send(number) {
  console.log("number");
  console.log(number);
  return api
    .post(`/verify/send`, { number: number })
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

export function register({ number }) {
  console.log("number");
  console.log(number);
  // return api
  //   .post(`/verify/send`, { number: props.number })
  //   .then(res => {
  //     return res;
  //   })
  //   .catch(error => {
  //     throw Error(error.response.data.error);
  //   });
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
