import React from 'react'
import { axiosIndexItem } from '../../axios/axiosIndex'

import './Item.scss'
function Item() {
    const [data, setData] = React.useState([])
    React.useEffect(() => {
        axiosIndexItem().then((res) => {
            setData(res.data.data)
        })
    }, [])
    return (
        <div className='index-item'>
            <ul>
                {
                    data.length !== 1 ?
                        data.slice(0, data.length / 2).map((val, index) => (
                            <React.Fragment key={index}>
                                <div></div>
                                <li className={`list-${index}`} key={index}>
                                    <img src={val.img} alt='image' />
                                    <span>{val.name}</span>
                                </li>
                                <div></div>
                            </React.Fragment>
                            )) : null
                }
            </ul>
            <ul>
                {
                    data.length !== 1 ?
                        data.slice(data.length / 2 ).map((val, index) => (

                            <React.Fragment key={index}>
                                <div></div>
                                <li className={`list-${index}`} key={index}>
                                    <img src={val.img} alt='image' />
                                    <span>{val.name}</span>
                                </li>
                                <div></div>
                            </React.Fragment>

                        )) : null
                }
            </ul>
        </div>
    )
}

export default Item 