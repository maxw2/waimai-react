import React from 'react'
import { ThemeContext } from './ShopTheme'
import add from './icon_add.png'
import minus from './icon_minus.png'

import './ShopContentMenuAddCars.scss'
function ShopContentMenuAddCars(props) {
    const [state, dispatch] = React.useContext(ThemeContext)
    const data = props.data
    let carsData = null
    
    state.forEach(val => {
        if (val.id === data.id) {
            carsData = val
        }
    })
    function addCars(val) {
        dispatch({
            type: 'add',
            data: {
                id: val.id,
                name: val.name,
                sell: val.sell,
            }
        })
    }
    function minusCars(val) {
        dispatch({
            type: 'minus',
            data: {
                id: val.id
            }
        })
    }



    return (
        <div className='shop-content-menu-add-cars'>
            {
                carsData ?
                    <span className='minus' onClick={()=>{minusCars(data)}}>
                        <img src={minus} alt='minus' />
                    </span> : null
            }
            {
                carsData ?
                    <span className='num'>{carsData.num}</span> : null
            }
            <span className='add' onClick={() => { addCars(data) }}>
                <img src={add} alt='add' />
            </span>
        </div>
    )
}

export default ShopContentMenuAddCars