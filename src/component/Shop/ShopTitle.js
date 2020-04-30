import React from 'react'
import { useHistory } from "react-router-dom";

import './ShopTitle.scss'
function ShopTitle(props) {
    const title = props.title
    const history = useHistory()
    function goBackHistory() {
        history.goBack()
    }
    return (
        <div className='shop-title'>
            <div className='shop-title-input'>
                <i className='arrow' onClick={goBackHistory}></i>
            </div>
            {
                title ?
                    <>
                        <div className='shop-title-content'>
                            <div className='left'>
                                <img src={title.image} alt='logo' />
                            </div>
                            <div className='right'>
                                <p>{`${title.time}分钟 | ${title.distance.toString().length > 3 ? title.distance / 1000 + 'km' : title.distance + 'm'}`}</p>
                                <p>{`公告：${title.announcement}`}</p>
                                <div className='dis'>
                                    <img src={title.dis.image} />
                                    <span>{title.dis.content}</span>
                                </div>
                            </div>
                        </div>
                    </> : null
            }

        </div>
    )
}

export default ShopTitle