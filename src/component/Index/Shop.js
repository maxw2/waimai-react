import React from 'react'
import { ShopTheme } from './ShopTheme'

import ShopTag from './ShopTag'
import ShopContent from './ShopContent'

import './Shop.scss'
function Shop() {
    return (
        <div className='index-shop'>
            <ShopTheme>
                <ShopTag />
                <ShopContent />
            </ShopTheme>
        </div>
    )
}

export default Shop