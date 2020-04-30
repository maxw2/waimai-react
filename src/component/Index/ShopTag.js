import React from 'react'
import { ThemeContext } from './ShopTheme'

import ShopTagSort from './ShopTagSort'
import ShopTagFilter from './ShopTagFilter'

import './ShopTag.scss'
function ShopTag() {
    const theme = React.useContext(ThemeContext)
    const origin = theme.data.origin
    const dispatch = theme.dispatch
    // active
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
    // scrollTo
    function scrollTo() {
        let indexEl = document.querySelector('.index')
        let itemEl = document.querySelector('.index .index-item')
        let tagTitleEl = document.querySelector('.index .index-shop .tag .tag-shop-title')
        let shopTop = itemEl.clientHeight + tagTitleEl.clientHeight + 20
        indexEl.scrollTo({
            top: shopTop,
            behavior: 'smooth'
        })
    }
    // mask
    function clearMask() {
        let maskEl = document.querySelector('.index .index-mask')
        let sortList = document.querySelector('.index .sort-list')
        let filterList = document.querySelector('.index .filter')
        maskEl.style = ''
        sortList.style = ''
        filterList.style = ''
    }
    //  
    function sales(ev) {
        const ori = origin.slice(0)

        ev.activeEl = active(ev)
        clearMask()
        scrollTo()
        ori.sort((o1, o2) => {
            return o2.sales - o1.sales
        })
        dispatch({
            type: 'addViewData',
            view: ori
        })
    }
    function distance(ev) {
        const ori = origin.slice(0)
        ev.activeEl = active(ev)
        clearMask()
        scrollTo()
        ori.sort((o1, o2) => {
            return o1.distance - o2.distance
        })
        dispatch({
            type: 'addViewData',
            view: ori
        })
    }

    return (
        <div className='tag'>
            <div className='tag-shop-title'>附近商家</div>
            <ul className='tag-list' >
                <ShopTagSort />
                <li onClick={sales}>销量最高</li>
                <li onClick={distance}>距离最近</li>
                <ShopTagFilter />

            </ul>
        </div>
    )
}

export default ShopTag