import api from "./init";

export function getProduct(id) {
  return api.get(`/productDetail/product/${id}`).then(res => {
    if (res) {
      return res.data;
    }
  });
}
