import React from 'react'

import './ShopContentMenuLeft.scss'
function ShopContentMenuLeft(props) {
    let content = document.querySelector('.shop-container')
    function scrollTo_content(ev) {
        let contentTop = content.scrollTop
        let top = ev.currentTarget.scrollTop
        if (Math.abs(top - contentTop) > 50) return
        content.scrollTo(0, top)
    }

    return (
        <div className='shop-content-menu-left-c'
            onScroll={scrollTo_content}
            style={{ height: document.documentElement.clientHeight - 40 }}>
            {
                props.menu.map((val, index) => (
                    <div key={index}
                        data-btn={index}
                        className={index === 0 ? 'active' : null}>{val.cate}</div>
                ))
            }
        </div>
    )
}

export default ShopContentMenuLeft