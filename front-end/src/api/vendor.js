import api from "./init";

export function getVendorByCat(id) {
  return api.get(`/vendor/category/${id}`).then(res => {
    if (res) {
      return res.data;
    }
  });
}
