import React from 'react'
import Swiper from '../../common/swiper/Swiper'
import ShopContentMenu from './ShopContentMenu'
import ShopContentEva from './ShopContentEva'
import ShopContentShop from './ShopContentShop'


import './ShopContent.scss'
function ShopContent() {
    const [swiperTo, setSwiper] = React.useState(null)
    function swiper(ev) {
        let current = ev.currentTarget
        let target = ev.target
        let span = current.querySelector('span')
        let buttonCar = document.querySelector('.shop .shop-content-menu-cars')
        if (target.getAttribute('data-btn')) {
            let btn = target.getAttribute('data-btn')
            swiperTo(btn)
            // font
            if (!ev.activeEl) {
                ev.activeEl = document.querySelector('.shop-content-title .active')
            }
            ev.activeEl.classList.remove('active')
            target.classList.add('active')
            ev.activeEl = target
            // btn
            span.style.left = `calc(100% * 1 / 3 / 2 - 10px + 100% * ${btn / 3})`
            // car
            if (Number(btn) === 0) {
                buttonCar.style.display = ''
            } else {
                buttonCar.style.display = 'none'
            }
        }

    }
    return (
        <div className='shop-content' >
            <div className='shop-content-title'>
                <ul onClick={swiper}>
                    <li data-btn='0' className='active'>点菜</li>
                    <li data-btn='1'>评价</li>
                    <li data-btn='2'>商家</li>
                    <span className='bottom'></span>
                </ul>
            </div>
            <div className='shop-content-swiper'>
                <Swiper setSwiper={setSwiper}>
                    <ShopContentMenu />
                    <ShopContentEva />
                    <ShopContentShop />
                </Swiper>
            </div>
        </div>
    )
}

export default ShopContent