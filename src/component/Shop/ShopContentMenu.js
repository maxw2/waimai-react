import React from 'react'
import Menu from '../../common/menu/Menu'
import ShopContentMenuLeft from './ShopContentMenuLeft'
import ShopContentMenuRight from './ShopContentMenuRight'
import { useParams } from 'react-router-dom'
import { axiosShopMenu } from '../../axios/axiosShop'


import './ShopContentMenu.scss'
import Loading from '../../common/loading/Loading'
function ShopContentMenu() {
    const [data, setData] = React.useState(null)
    const params = useParams()
    React.useEffect(() => {
        const id = params.id
        axiosShopMenu(id).then((res) => {
            setData(res.data.data)
        })
    }, [])
    return (
        <div className='shop-content-menu' 
        // style={{ width: document.documentElement.clientWidth }}
        >
            {
                data ?
                    <Menu>
                        <Menu.Left>
                            <ShopContentMenuLeft menu={data.menu} />
                        </Menu.Left>
                        <Menu.Right>
                            <ShopContentMenuRight menu={data.menu} />
                        </Menu.Right>
                    </Menu>
                    : null
            }
        </div>

    )
}

export default ShopContentMenu