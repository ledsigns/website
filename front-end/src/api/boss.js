import api from "./init";

export function clickAmount() {
    return api.get(`/boss/clickAmount`).then(res => {
        if (res) {
            return res.data;
        }
    });
}

export function allByMonth() {
    return api.get(`/boss/allByMonth`).then(res => {
        if (res) {
            return res.data;
        }
    });
}