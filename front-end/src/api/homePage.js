import api from "./init";

export function getHomePageData() {
  return api.get(`/homePage/`).then(res => {
    if (res) {
      return res.data;
    }
  });
}
