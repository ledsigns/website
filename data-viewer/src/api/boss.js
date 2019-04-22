import api from "./init";

export function getBossData() {
  return api.get(`/boss/`).then(res => {
    if (res) {
      return res.data;
    }
  });
}
