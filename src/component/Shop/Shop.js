import React from 'react'
import { useParams } from 'react-router-dom'
import { axiosShopMenu } from '../../axios/axiosShop'

import ShopTitle from './ShopTitle'
import ShopContent from './ShopContent'

import './Shop.scss'
import { Theme } from './ShopTheme'
import ShopContentMenuCars from './ShopContentMenuCars'
function Shop() {
    const [data, setData] = React.useState({})
    const params = useParams()
    React.useEffect(() => {
        let id = params.id
        axiosShopMenu(id).then((res) => {
            setData(res.data.data)
        })
    }, [])
    return (
        <Theme>
            <div className='shop'
            // style={{ height: document.documentElement.clientHeight }}
            >
                <div className='shop-container'>
                    <ShopTitle title={data.title} />
                    <ShopContent />
                    
                </div>
                <ShopContentMenuCars />
            </div>
        </Theme>
    )
}

export default Shop