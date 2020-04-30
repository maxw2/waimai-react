import React from 'react'

import './Title.scss'
function Title() {

    return (
        <div className='index-title' >
            <div className='coordinate'>
                <div>
                    <i className='fa fa-map-marker'></i>南山区甲1号</div>
            </div>
            <div className='input '>
                <i className='fa fa-search'></i>
                <input readOnly disabled placeholder='请输入商家或商品名' />
            </div>
        </div>
    )
}

export default Title 