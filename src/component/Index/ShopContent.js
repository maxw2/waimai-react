import React from 'react'
import { ThemeContext } from './ShopTheme'
import { axiosIndexShop } from '../../axios/axiosIndex'
import ShopContentList from './ShopContentList'

import './ShopContent.scss'
import Mask from './Mask'
function ShopContent() {
    const Theme = React.useContext(ThemeContext)
    const data = Theme.data.viewData
    const dispatch = Theme.dispatch
    React.useEffect(() => {
        axiosIndexShop()
            .then((res) => {
                dispatch({
                    type: 'addOrigin',
                    origin: res.data.data,
                })
                dispatch({
                    type: 'addViewData',
                    view: res.data.data,
                })
            })
    }, [])
    return (
        <div className='shop-content'>
            <ul>
                {
                    data.length !== 0 ?
                        data.map((val, index) => (
                            <ShopContentList key={index} shopList={val} />
                        ))
                        : null
                }
            </ul>
            <Mask />
        </div>
    )
}

export default ShopContent