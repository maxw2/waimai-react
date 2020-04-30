import axios from 'axios'


function axiosIndexItem() {
    return axios.get('/index/item')
}

function axiosIndexShop() {
    return axios.get('/index/shopList')
}


export {
    axiosIndexItem,
    axiosIndexShop
}