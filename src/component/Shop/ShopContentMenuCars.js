import React from 'react'
import { ThemeContext } from './ShopTheme'
import cart_o from './cart_o.png'
import cart from './cart.png'


import './ShopContentMenuCars.scss'
import ShopContentMenuAddCars from './ShopContentMenuAddCars'
function ShopContentMenuCars() {
    const [state, dispatch] = React.useContext(ThemeContext)
    const [bool, setBool] = React.useState(false)
    // carNum()
    const measuredRef = React.useCallback(node => {
        if (node !== null) {
            let height = node.getBoundingClientRect().height
            node.style.transform = `translateY(${height}px)`

            setTimeout(() => {
                node.style.transition = `0.3s ease transform`
                node.style.transform = `translateY(0)`
            }, 0)
        }
    }, [])
    function switchCars(ev) {
        let target = ev.target
        if (target.getAttribute('data-total')) return
        if (bool) {
            let itemEl = document.querySelector('.shop-content-menu-cars .cars-item .item')
            let itemEl_h = itemEl.clientHeight

            itemEl.style.transform = `translateY(${itemEl_h}px)`
            setTimeout(() => {
                setBool(!bool)
            }, 300)
        } else {
            setBool(!bool)
        }


    }
    function clear() {
        setBool(false)
        dispatch({
            type: 'clear'
        })
    }
    function total(state) {
        let num = 0
        let arr = state
        arr.forEach((val) => {
            num += val.num * val.sell
        });
        return num
    }
    function carNum() {
        let num = 0
        state.forEach(val => {
            num += val.num
        })
        return num
    }
    return (  
        <div className='shop-content-menu-cars'>
            <div className='cars' onClick={switchCars}>
                <div className='cars-left'>
                    <img src={state.length === 0 ? cart_o : cart} alt='car' />
                    {
                        carNum() !== 0 ?
                            <div className='cars-num'>{carNum()}</div> : null
                    }
                </div>
                <div className='cars-mid'>
                    {
                        state.length === 0 ?
                            <span className='none'>无需配送费</span> :
                            <>
                                <p>{`¥ ${total(state)}`}</p>
                                <p>无需配送费</p>
                            </>

                    }
                </div>
                <div className='cars-right'>
                    {
                        state.length === 0 ?
                            <span>¥0起送</span> :
                            <div data-total='true'
                                onClick={() => {
                                    alert(`一共所需${total(state)}元`)
                                }}>去结算</div>
                    }
                </div>
            </div>
            <div className='cars-item'>
                {
                    bool ?
                        <div className='item' ref={measuredRef}>
                            <div className='title'>
                                <div>购物车</div>
                                <div onClick={() => { clear() }}>
                                    <i className='fa fa-trash'></i>清空购物车
                                </div>
                            </div>
                            <ul className='list'>
                                {
                                    state.map((val, index) => (
                                        <li className={`list-${index} lists`} key={index}>
                                            <div>{val.name}</div>
                                            <span className='sell'>{`¥${val.sell}`}</span>
                                            <ShopContentMenuAddCars data={val} />
                                        </li>
                                    ))
                                }
                            </ul>
                        </div> : null
                }
            </div>

        </div >
    )
}

export default ShopContentMenuCars