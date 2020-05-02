import React from 'react'

import './MenuRight.scss'
function MenuRight(props) {
    const menuData = props.menuData
    function menuRightScroll(ev) {
        if (!props.menuData.length) return
        let el = ev.target
        if (!el.btn) el.btn = 0
        let scrollTop = el.scrollTop
        let menuLen = menuData.length

        // next
        if (menuData[el.btn + 1] && scrollTop >= menuData[el.btn + 1][1].top) {
            let oldLeftEl = menuData[el.btn][0].content
            let newLeftEl = menuData[el.btn + 1][0].content
            oldLeftEl.classList.remove('active')
            newLeftEl.classList.add('active')
            menuLeftScrollTo(menuData[el.btn + 1])
            el.btn = el.btn + 1

        }
        // prev
        else if (scrollTop < menuData[el.btn][1].top) {
            let oldLeftEl = menuData[el.btn][0].content
            let newLeftEl = menuData[el.btn - 1][0].content
            oldLeftEl.classList.remove('active')
            newLeftEl.classList.add('active')
            menuLeftScrollTo(menuData[el.btn])
            el.btn = el.btn - 1
        }
    }

    function menuLeftScrollTo(menuData) {
        const data = menuData
        const el = data[0].el
        const el_h = data[0].el.clientHeight
        const leftTop = data[0].top - (el_h / 2)

        el.scrollTo({
            top: leftTop,
            // behavior: 'smooth'
        })

    }

    return (
        <div className='common-menu-right'
            onScroll={menuRightScroll}>
            {
                props.children
            }
        </div>
    )
}

export default MenuRight