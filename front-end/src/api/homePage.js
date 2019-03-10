import api from "./init";

export function getCategoryData() {
  return api.get(`/category/`).then(res => {
    if (res) {
      return res.data;
    }
  });
}
