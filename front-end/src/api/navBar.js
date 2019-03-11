import api from "./init";

export function getNavBarData() {
    return api.get(`/navBar/`).then(res => {
        if (res) {
            return res.data;
        }
    });
}
