import api from "./init";

export function getProduct(id) {
  return api.get(`/product/${id}`).then(res => {
    if (res) {
      return res.data;
    }
  });
}

export function getRelevantProduct(vendorId, categoryId) {
  return api.get(`/vendor/${vendorId}/category/${categoryId}`).then(res => {
    if (res) {
      return res.data;
    }
  });
}