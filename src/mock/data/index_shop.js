import shop_0 from './shopImg/index-shop-0.webp'
import shop_1 from './shopImg/index-shop-1.webp'
import shop_2 from './shopImg/index-shop-2.webp'
import shop_3 from './shopImg/index-shop-3.webp'
import shop_4 from './shopImg/index-shop-4.webp'
import shop_5 from './shopImg/index-shop-5.webp'
import shop_6 from './shopImg/index-shop-6.webp'
import shop_7 from './shopImg/index-shop-7.webp'

//
import index_shop_dis from './shopImg/index-shop-dis.png'
import index_shop_frist from './shopImg/index-shop-frist.png'
import index_shop_give from './shopImg/index-shop-give.png'
import index_shop_inv from './shopImg/index-shop-inv.webp'


const shopList = {
    url: '/index/shopList',
    res: {
        data: [{
            id: 10000,
            name: '麦当劳麦乐送',
            image: shop_0,
            start: 4.8,                 // 星
            sales: 7465,                // 销量
            time: 14,                   // 配送时间
            distance: 1200,             // 距离
            pick: 9,                    // 起送
            delivery: 0,                // 配送
            capita: 42,                 // 人均
            dis: [{
                name: '首单立减',
                image: index_shop_frist,
                content: '首单立减10元',
            }, {
                name: '满减优惠',
                image: index_shop_give,
                content: '满100减1元',
            }, {
                name: '优惠商家',
                image: index_shop_dis,
                content: '部分商品优惠',
            }, {
                name: '开具发票',
                image: index_shop_inv,
                content: '本店支持开发票，开票金额0元起',
            }]
        }, {
            id: 10001,
            name: '汉堡王',
            image: shop_1,
            start: 4.9,                 // 星
            sales: 9999,                // 销量
            time:28,                   // 配送时间
            distance: 1400,             // 距离
            pick: 20,                    // 起送
            delivery: 9,                // 配送
            capita: 37,                 // 人均
            //  
            dis: [{
                name: '首单立减',
                image: index_shop_frist,
                content: '首单立减10元',
            }, {
                name: '满减优惠',
                image: index_shop_give,
                content: '满100减1元',
            }, {
                name: '优惠商家',
                image: index_shop_dis,
                content: '部分商品优惠',
            }, {
                name: '开具发票',
                image: index_shop_inv,
                content: '本店支持开发票，开票金额0元起',
            }]

        }, {
            id: 10002,
            name: '田老师',
            image: shop_2,
            start: 4.1,                 // 星
            sales: 1100,                // 销量
            time: 20,                   // 配送时间
            distance: 300,             // 距离
            pick: 10,                    // 起送
            delivery: 2,                // 配送
            capita: 21,                 // 人均
            //  
            discount: true,             // 优惠商家
            disImg: index_shop_dis,
            frist: false,               // 首单立减
            fristImg: index_shop_frist,
            give: false,                // 满减优惠
            giveImg: index_shop_give,
            invoice: true,              // 开具发票
            invImg: index_shop_inv,
            dis: [{
                name: '首单立减',
                image: index_shop_frist,
                content: '首单立减10元',
            }, {
                name: '开具发票',
                image: index_shop_inv,
                content: '本店支持开发票，开票金额0元起',
            }]
        }, {
            id: 10003,
            name: '青年食堂',
            image: shop_3,
            start: 4.5,                 // 星
            sales: 1020,                // 销量
            time: 24,                   // 配送时间
            distance: 4200,             // 距离
            pick: 12,                    // 起送
            delivery: 3,                // 配送
            capita: 23,                 // 人均
            //  
            dis: [{
                name: '首单立减',
                image: index_shop_frist,
                content: '首单立减10元',
            }, {
                name: '满减优惠',
                image: index_shop_give,
                content: '满100减1元',
            }]
        }, {
            id: 10004,
            name: '果树家园',
            image: shop_4,
            start: 3.9,                 // 星
            sales: 2031,                // 销量
            time: 15,                   // 配送时间
            distance: 3000,             // 距离
            pick: 10,                    // 起送
            delivery: 5,                // 配送
            capita: 20,                 // 人均
            //  
            dis: [{
                name: '优惠商家',
                image: index_shop_dis,
                content: '部分商品优惠',
            }, {
                name: '开具发票',
                image: index_shop_inv,
                content: '本店支持开发票，开票金额0元起',
            }]
        }, {
            id: 10005,
            name: 'CoCo都可',
            image: shop_5,
            start: 4.8,                 // 星
            sales: 1210,                // 销量
            time: 40,                   // 配送时间
            distance: 300,             // 距离
            pick: 5,                    // 起送
            delivery: 0,                // 配送
            capita: 10,                 // 人均
            //  
            dis: [{
                name: '优惠商家',
                image: index_shop_dis,
                content: '部分商品优惠',
            }, {
                name: '开具发票',
                image: index_shop_inv,
                content: '本店支持开发票，开票金额0元起',
            }]

        }, {
            id: 10006,
            name: '贡茶',
            image: shop_6,
            start: 4.4,                 // 星
            sales: 3020,                // 销量
            time: 24,                   // 配送时间
            distance: 700,             // 距离
            pick: 0,                    // 起送
            delivery: 4,                // 配送
            capita: 17,                 // 人均
            //  
            dis: [{
                name: '优惠商家',
                image: index_shop_dis,
                content: '部分商品优惠',
            }, {
                name: '开具发票',
                image: index_shop_inv,
                content: '本店支持开发票，开票金额0元起',
            }]

        }, {
            id: 10007,
            name: '华联超市',
            image: shop_7,
            start: 4.3,                 // 星
            sales: 500,                // 销量
            time: 10,                   // 配送时间
            distance: 1200,             // 距离
            pick: 0,                    // 起送
            delivery: 2,                // 配送
            capita: 100,                 // 人均
            //  
            dis: [{
                name: '优惠商家',
                image: index_shop_dis,
                content: '部分商品优惠',
            }, {
                name: '开具发票',
                image: index_shop_inv,
                content: '本店支持开发票，开票金额0元起',
            }]

        },]
    }
}


export default shopList