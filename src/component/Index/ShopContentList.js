import React from 'react'
import { Link } from 'react-router-dom'

import './ShopContentList.scss'
function ShopContentList(props) {
    const liEl = React.useRef(null)
    const data = props.shopList
    let start = data.start
    React.useEffect(() => {
        liEl.current.style.opacity = '1'
        return function clear() {
            liEl.current.style.opacity = '0'
        }
    })
    function onClick(ev) {
        let el = ev.currentTarget
        let btn = el.querySelector('.btn')
        let val = Boolean(el.getAttribute('data-on'))
        if (!btn) return
        if (val) {
            el.className = 'on'
            btn.style.transform = 'rotate(45deg)'
            el.setAttribute('data-on', '')
        } else {
            el.className = ''
            btn.style.transform = 'rotate(-135deg)'
            el.setAttribute('data-on', 'true')
        }
    }
    return (
        <>
            {/* <Link to='/shop/1000'> */}
            <li className='content-list' key={data.id} ref={liEl} >

                <div className='left'>
                    <img src={data.image} alt='logo' />
                </div>
                <div className='right'>
                    <Link to='/shop/1000'>
                        <div className='title'>{data.name}</div>
                        <div className='content'>
                            <ul>
                                <li className='start'>
                                    {
                                        ['', '', '', '', ''].map((val, index) => {
                                            if (start > 1) {
                                                start -= 1
                                                return <span key={index}><i className='fa fa-star'></i></span>
                                            } else if (start > 0.5) {
                                                start -= 1
                                                return (
                                                    <span key={index}>
                                                        <i className='fa fa-star-half-o'></i>
                                                    </span>
                                                )
                                            } else {
                                                return <span key={index}><i className='fa fa-star star-o'></i></span>
                                            }
                                        })
                                    }
                                    {
                                        data.start
                                    }
                                </li>
                                <li>月售 {data.sales}</li>
                                <li className='distance'>
                                    <span>{data.time}分钟</span>
                                    {
                                        data.distance.toString().length > 3 ?
                                            data.distance / 1000 + 'km' : data.distance + 'm'
                                    }
                                </li>
                                <li>起送{data.pick}</li>
                                <li>配送{data.delivery}</li>
                                <li>人均{data.capita}</li>
                            </ul>
                        </div>
                    </Link>
                    <div className='discount'>
                        <ul onClick={onClick} data-on='true'>
                            {
                                data.dis.map((val, index) => (
                                    <li key={index} >
                                        <img src={val.image} alt='logo' />
                                        <span>{val.content}</span>
                                    </li>
                                ))
                            }
                            {
                                data.dis.length > 2 ?
                                    <span className='btn'></span> : null
                            }
                        </ul>
                    </div>
                </div>

            </li>
            {/* </Link > */}
        </>
    )
}

export default ShopContentList