import axios from 'axios'

function axiosShopMenu(id) {
    return axios.get(`/menu/${id}`)
}

function axiosShopMenuEva(id) {
    return axios.get(`/menu/eva/${id}`)
}

function axiosShopMenuShop(id) {
    return axios.get(`/menu/shop/${id}`)
}
export {
    axiosShopMenu,
    axiosShopMenuEva,
    axiosShopMenuShop
}