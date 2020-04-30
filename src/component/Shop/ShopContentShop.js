import React from 'react'
import { axiosShopMenuShop } from '../../axios/axiosShop'
import { useParams } from 'react-router-dom'

import './ShopContentShop.scss'
import Loading from '../../common/loading/Loading'
function ShopContentShop() {
    const [data, setData] = React.useState(null)
    const params = useParams()
    React.useEffect(() => {
        const id = params.id
        axiosShopMenuShop(id)
            .then((res) => {
                setData(res.data.data)
            })
    }, [])
    return (
        <div className='shop-content-shop' style={{ width: document.documentElement.clientWidth }}>
            {
                data ?
                    <>
                        <div className='address'>
                            <div>
                                <i className='fa fa-map-marker'></i>
                                {data.address}
                            </div>
                        </div>
                        <div className='archive'>
                            <div>
                                <i className='fa fa-map-marker'></i>
                                {data.archive}
                            </div>
                        </div>
                        <div className='date'>
                            <div>
                                <i className='fa fa-clock-o'></i>
                                {`配送时间：${data.date}`}
                            </div>
                        </div>
                        <div className='content'>
                            <div>
                                <i className='fa fa-volume-off'></i>
                                <p>{data.content}</p>

                            </div>
                        </div>
                        <div className='services'>
                            <div>
                                <i className='fa fa-check-circle-o'></i>
                                <span>商家服务</span>
                                <ul>
                                    {
                                        data.services.map((val, index) => (
                                            <li key={index}>
                                                <img src={val.image} alt='logo' />
                                                <span>{val.name}</span>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className='discount'>
                            {
                                data.discount.map((val, index) => (
                                    <div key={index}>
                                        <img src={val.image} alt='logo' />
                                        <span>{val.name}</span>
                                    </div>
                                ))
                            }
                        </div>
                    </> : null
            }
        </div>
    )
}

export default ShopContentShop