import React from 'react'
import dis from '../../mock/data/shopImg/index-shop-dis.png'
import frist from '../../mock/data/shopImg/index-shop-frist.png'
import give from '../../mock/data/shopImg/index-shop-give.png'
import inv from '../../mock/data/shopImg/index-shop-inv.webp'

import './ShopTagFilter.scss'
function ShopTagFilter() {
    const take = [{
        image: '',
        name: "美团外卖"
    }]
    const features = ['免配送费', "0元起送", "新商家", "品牌商家", "点评高分", "跨天预定", "支持开发票"]
    const average = ['20元以下', "20-40元", "40元以上"]
    const discount = [{
        image: dis,
        name: '优惠商家'
    }, {
        image: frist,
        name: '首单立减'
    }, {
        image: give,
        name: '满减优惠'
    }, {
        image: inv,
        name: '开具发票'
    }, {
        image: dis,
        name: '优惠商家'
    }, {
        image: frist,
        name: '首单立减'
    }, {
        image: give,
        name: '满减优惠'
    }, {
        image: inv,
        name: '开具发票'
    }, {
        image: dis,
        name: '优惠商家'
    }, {
        image: frist,
        name: '首单立减'
    }, {
        image: give,
        name: '满减优惠'
    }, {
        image: inv,
        name: '开具发票'
    },]
    // action
    function active(ev) {
        let el = ev.currentTarget
        if (ev.activeEl) {
            ev.activeEl.classList.remove('active')
            el.classList.add('active')
            return el
        } else {
            el.classList.add('active')
            return el
        }
    }

    // mask 
    function mask(ev, el) {
        let target = ev.currentTarget
        let maskEl = document.querySelector('.index .index-mask')
        let sortEl = document.querySelector('.index .index-shop .tag .tag-list .sort-list')
        let filterEl = document.querySelector('.index .index-shop .tag .tag-list .filter')
        let filterStyle = filterEl.getAttribute('style')

        if (filterStyle) {
            maskEl.style = ''
            sortEl.style = ''
            filterEl.style = ''
        } else {
            maskEl.style.display = 'block'
            sortEl.style.display = ''
            filterEl.style.display = 'block'
        }

    }
    // scrollTo
    function scrollTo() {
        let indexEl = document.querySelector('.index')
        let itemEl = document.querySelector('.index .index-item')
        let tagTitleEl = document.querySelector('.index .index-shop .tag .tag-shop-title')
        let shopTop = itemEl.clientHeight + tagTitleEl.clientHeight + 20
        // console.log(shopTop)
        indexEl.scrollTo({
            top: shopTop,
            behavior: 'smooth'
        })
    }


    function filter(ev) {
        const filterEl = document.querySelector('.index .index-shop .tag .filter')
        ev.activeEl = active(ev)
        ev.btnEl = mask(ev, filterEl)
        scrollTo()
    }
    return (
        <li className='tag-filter'
            data-btn='false'
            onClick={filter}>筛选<i className='fa fa-filter'></i>
            <div className='filter'>
                <div className='take'>
                    <ul>
                        {
                            take.map((val, index) => (
                                <li key={index}>
                                    <i className='fa fa-bicycle'></i>
                                    {val.name}
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className='features'>
                    <div className='features-title'>商家特色（可多选）</div>
                    <ul>
                        {
                            features.map((val, index) => (
                                <li key={index}>{val}</li>
                            ))
                        }
                    </ul>
                </div>
                <div className='average'>
                    <div className='average-title'>人均价</div>
                    <ul>
                        {
                            average.map((val, index) => (
                                <li key={index}>{val}</li>
                            ))
                        }
                    </ul>
                </div>
                <div className='discount'>
                    <div className='discount-title'>优惠活动（单选）</div>
                    <ul>
                        {
                            discount.map((val, index) => (
                                <li key={index}>
                                    <img src={val.image} />
                                    {val.name}
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </li>
    )
}

export default ShopTagFilter