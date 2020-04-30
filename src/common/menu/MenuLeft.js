import React from 'react'

import './MenuLeft.scss'
function MenuLeft(props) {
    function menuLeftClick(ev) {
        let el = ev.target
        let btn = el.getAttribute('data-btn')
        if (!btn) return
        let arrData = props.menuData[btn]
        let rightEl = arrData[1].el
        let rightTop = arrData[1].top

        menuLeftScrollTo(arrData)
        rightEl.scrollTo({
            top: rightTop,
            behavior: 'smooth'
        })

        

    }
    
    function menuLeftScrollTo(menuData) {
        const data = menuData
        const el = data[0].el
        const el_h = data[0].el.clientHeight
        const content_h = data[0].content.clientHeight
        const leftTop = data[0].top - (el_h / 2)
        
        el.scrollTo({
            top:leftTop,
            // behavior: 'smooth'
        })

    }
    return (
        <div className='common-menu-left'
            onClick={menuLeftClick} >
            {
                props.children
            }
        </div>
    )
}

export default MenuLeft