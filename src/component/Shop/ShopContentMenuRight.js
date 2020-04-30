import React from 'react'

import './ShopContentMenuRight.scss'
import ShopContentMenuAddCars from './ShopContentMenuAddCars'
function ShopContentMenuRight(props) {
    let content = document.querySelector('.shop')
    function scrollTo_content(ev) {
        let contentTop = content.scrollTop
        let top = ev.currentTarget.scrollTop
        if (Math.abs(top - contentTop) > 50) return
        content.scrollTo(0, top)
    }

    return (
        <div className='shop-content-menu-right-c'
            onScroll={scrollTo_content}
            style={{ height: document.documentElement.clientHeight - 40 }}>
            {
                props.menu.map((val, index, arr) => (
                    <div className='shop-content-menu-right'
                        style={index === arr.length - 1 ?
                            { minHeight: '110%' } : null}
                        data-btn={index}
                        key={index}>
                        <div className='title'>{val.cate}</div>
                        {
                            val.data.map((val, index) => (
                                <div className='content' key={index} >
                                    <div className='left'>
                                        <img src={val.image} alt='logo' />
                                    </div>
                                    <div className='right'>
                                        <p className='right-name'>{val.name}</p>
                                        <p className='right-title'>{val.title}</p>
                                        <p className='right-sales'>{`月售${val.sales} 赞${val.like}`}</p>
                                        <div className='price'>
                                            <span className='sell'>{`￥${val.sell}`}</span>
                                            <ShopContentMenuAddCars data={val} />
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                ))

            }
        </div>


    )
}

export default ShopContentMenuRight