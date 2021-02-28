import * as axios from "axios";


export const dataTableAPI = {
    getData(url) {
        return axios.get(`${url}`)
            .then(response => {
                if (response.status === 200) {
                    return response.data
                }
            })
    },
}

