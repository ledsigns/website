import api from "./init";

export function getProduct(id) {
  return api.get(`/product/${id}`).then(res => {
    if (res) {
      return res.data;
    }
  });
}

export function getProductByVendor(vendorId) {
  return api.get(`product/vendor/${vendorId}`).then(res => {
    if (res) {
      return res.data;
    }
  });
}