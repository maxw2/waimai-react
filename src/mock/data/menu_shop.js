import menuShopImg from './shopImg/index-shop-0.webp'
import index_shop_frist from './shopImg/index-shop-frist.png'
import _1 from './menu_1.webp'
import inv from './shopImg/index-shop-inv.webp'
import dis from './shopImg/index-shop-dis.png'
import fri from './shopImg/index-shop-frist.png'
import give from './shopImg/index-shop-give.png'

const menu = {
    url: '/menu/1000',
    res: {
        data: {
            // 标题
            title: {
                name: '麦当劳麦乐送',
                announcement: '欢迎来到麦当劳，感谢顾客对本店的支持。',
                time: 30,
                distance: 1500,
                image: menuShopImg,
                dis: {
                    image: index_shop_frist,
                    content: '首单立减10元',
                }
            },
            // 菜单
            menu: [{
                cate: '热销',
                data: [{
                    id: 101,
                    name: '麦辣鸡翅1块',
                    title: '1块麦辣鸡翅 原料：鸡肉',
                    image: _1,
                    sales: 200,
                    like: 2,
                    sell: 13
                }, {
                    id: 102,
                    name: '麦辣鸡翅2块',
                    title: '2块麦辣鸡翅 原料：鸡肉',
                    image: _1,
                    sales: 200,
                    like: 2,
                    sell: 13
                }, {
                    id: 103,
                    name: '麦辣鸡翅3块',
                    title: '3块麦辣鸡翅 原料：鸡肉',
                    image: _1,
                    sales: 200,
                    like: 2,
                    sell: 13
                }, {
                    id: 104,
                    name: '麦辣鸡翅4块',
                    title: '4块麦辣鸡翅 原料：鸡肉',
                    image: _1,
                    sales: 200,
                    like: 2,
                    sell: 13
                }, {
                    id: 105,
                    name: '麦辣鸡翅5块',
                    title: '5块麦辣鸡翅 原料：鸡肉',
                    image: _1,
                    sales: 200,
                    like: 2,
                    sell: 13
                }, {
                    id: 106,
                    name: '麦辣鸡翅6块',
                    title: '6块麦辣鸡翅 原料：鸡肉',
                    image: _1,
                    sales: 200,
                    like: 2,
                    sell: 13
                }]
            }, {
                cate: '折扣',
                data: [{
                    id: 201,
                    name: '麦辣鸡翅21块',
                    title: '21块麦辣鸡翅 原料：鸡肉',
                    image: _1,
                    sales: 200,
                    like: 2,
                    sell: 13
                }, {
                    id: 202,
                    name: '麦辣鸡翅22块',
                    title: '22块麦辣鸡翅 原料：鸡肉',
                    image: _1,
                    sales: 200,
                    like: 2,
                    sell: 13
                }, {
                    id: 203,
                    name: '麦辣鸡翅23块',
                    title: '23块麦辣鸡翅 原料：鸡肉',
                    image: _1,
                    sales: 200,
                    like: 2,
                    sell: 13
                }, {
                    id: 204,
                    name: '麦辣鸡翅24块',
                    title: '24块麦辣鸡翅 原料：鸡肉',
                    image: _1,
                    sales: 200,
                    like: 2,
                    sell: 13
                }, {
                    id: 205,
                    name: '麦辣鸡翅25块',
                    title: '25块麦辣鸡翅 原料：鸡肉',
                    image: _1,
                    sales: 200,
                    like: 2,
                    sell: 13
                }, {
                    id: 206,
                    name: '麦辣鸡翅26块',
                    title: '26块麦辣鸡翅 原料：鸡肉',
                    image: _1,
                    sales: 200,
                    like: 2,
                    sell: 13
                }]
            }, {
                cate: '单人超值套餐',
                data: [{
                    id: 301,
                    name: '麦辣鸡翅31块',
                    title: '31块麦辣鸡翅 原料：鸡肉',
                    image: _1,
                    sales: 200,
                    like: 2,
                    sell: 13
                }, {
                    id: 302,
                    name: '麦辣鸡翅32块',
                    title: '32块麦辣鸡翅 原料：鸡肉',
                    image: _1,
                    sales: 200,
                    like: 2,
                    sell: 13
                }, {
                    id: 303,
                    name: '麦辣鸡翅33块',
                    title: '33块麦辣鸡翅 原料：鸡肉',
                    image: _1,
                    sales: 200,
                    like: 2,
                    sell: 13
                }, {
                    id: 304,
                    name: '麦辣鸡翅34块',
                    title: '34块麦辣鸡翅 原料：鸡肉',
                    image: _1,
                    sales: 200,
                    like: 2,
                    sell: 13
                }, {
                    id: 305,
                    name: '麦辣鸡翅35块',
                    title: '35块麦辣鸡翅 原料：鸡肉',
                    image: _1,
                    sales: 200,
                    like: 2,
                    sell: 13
                }, {
                    id: 306,
                    name: '麦辣鸡翅36块',
                    title: '36块麦辣鸡翅 原料：鸡肉',
                    image: _1,
                    sales: 200,
                    like: 2,
                    sell: 13
                }]
            }, {
                cate: '多人超值组合',
                data: [{
                    id: 401,
                    name: '麦辣鸡翅41块',
                    title: '41块麦辣鸡翅 原料：鸡肉',
                    image: _1,
                    sales: 200,
                    like: 2,
                    sell: 13
                }, {
                    id: 402,
                    name: '麦辣鸡翅42块',
                    title: '42块麦辣鸡翅 原料：鸡肉',
                    image: _1,
                    sales: 200,
                    like: 2,
                    sell: 13
                }, {
                    id: 403,
                    name: '麦辣鸡翅43块',
                    title: '43块麦辣鸡翅 原料：鸡肉',
                    image: _1,
                    sales: 200,
                    like: 2,
                    sell: 13
                }, {
                    id: 404,
                    name: '麦辣鸡翅44块',
                    title: '44块麦辣鸡翅 原料：鸡肉',
                    image: _1,
                    sales: 200,
                    like: 2,
                    sell: 13
                }, {
                    id: 405,
                    name: '麦辣鸡翅45块',
                    title: '45块麦辣鸡翅 原料：鸡肉',
                    image: _1,
                    sales: 200,
                    like: 2,
                    sell: 13
                }, {
                    id: 406,
                    name: '麦辣鸡翅46块',
                    title: '46块麦辣鸡翅 原料：鸡肉',
                    image: _1,
                    sales: 200,
                    like: 2,
                    sell: 13
                }]
            }, {
                cate: '企业专送',
                data: [{
                    id: 501,
                    name: '麦辣鸡翅51块',
                    title: '51块麦辣鸡翅 原料：鸡肉',
                    image: _1,
                    sales: 200,
                    like: 2,
                    sell: 13
                }, {
                    id: 502,
                    name: '麦辣鸡翅52块',
                    title: '52块麦辣鸡翅 原料：鸡肉',
                    image: _1,
                    sales: 200,
                    like: 2,
                    sell: 13
                }, {
                    id: 503,
                    name: '麦辣鸡翅53块',
                    title: '53块麦辣鸡翅 原料：鸡肉',
                    image: _1,
                    sales: 200,
                    like: 2,
                    sell: 13
                }, {
                    id: 504,
                    name: '麦辣鸡翅54块',
                    title: '54块麦辣鸡翅 原料：鸡肉',
                    image: _1,
                    sales: 200,
                    like: 2,
                    sell: 13
                }, {
                    id: 505,
                    name: '麦辣鸡翅55块',
                    title: '55块麦辣鸡翅 原料：鸡肉',
                    image: _1,
                    sales: 200,
                    like: 2,
                    sell: 13
                }, {
                    id: 506,
                    name: '麦辣鸡翅56块',
                    title: '56块麦辣鸡翅 原料：鸡肉',
                    image: _1,
                    sales: 200,
                    like: 2,
                    sell: 13
                }, {
                    id: 507,
                    name: '麦辣鸡翅57块',
                    title: '57块麦辣鸡翅 原料：鸡肉',
                    image: _1,
                    sales: 200,
                    like: 2,
                    sell: 13
                }]
            }],
        }
    }
}

// 商家
const menuShop = {
    url: '/menu/shop/1000',
    res: {
        data: {
            address: '深圳市南山区南头街道关口路1号',
            archive: '查看食品安全档案',
            date: '00:00-03:00,11:00-23:59',
            content: '欢迎光临麦当劳宅急送，专业外送，全程保温，准时送达！',
            services: [{
                name: '该商户支持在线支付',
                image: inv
            }, {
                name: '该商户为品牌商户',
                image: dis
            }],
            discount: [{
                name: '首单立减5元，满0.1元赠送赠送店家满满祝福 ',
                image: fri
            }]

        }
    }
}



export {
    menu,
    menuShop
}