import api from "./init";

export function getProduct(id) {
  return api.get(`/product/${id}`).then(res => {
    if (res) {
      return res.data;
    }
  });
}

export function getProductByCategoryAndVendor(categoryId, vendorId) {
  return api.get(`product/category/${categoryId}/vendor/${vendorId}`).then(res => {
    if (res) {
      return res.data;
    }
  });
}

export function getProductByCategory(id) {
  return api.get(`/product/category/${id}`).then(res => {
    if (res) {
      return res.data;
    }
  });
}