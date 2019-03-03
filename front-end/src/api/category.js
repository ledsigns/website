import api from "./init";

export function getEventData() {
  return api.get(`/category/`).then(res => {
    if (res) {
      return res.data;
    }
  });
}
