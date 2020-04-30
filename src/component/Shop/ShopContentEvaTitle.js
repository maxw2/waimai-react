import React from 'react'


import './ShopContentEvaTitle.scss'
function ShopContentEvaTitle(props) {
    let title = props.title
    function star(num) {
        let half = false
        return [1, 1, 1, 1, 1].map((val, index) => {
            if (num - index > 0.5) {
                return <i className='fa fa-star star' key={index}></i>
            } else if (!half) {
                half = true
                return <i className='fa fa-star-half-o star-half' key={index}></i>
            } else {
                return <i className='fa fa-star star-o' key={index}></i>
            }
        })
    }
    return (
        <div className='shop-content-eva-title'>
            <div className='title-left'>
                <p>{`${((title.taste + title.padckage) / 2).toFixed(1)}`}</p>
                <p>商家评分</p>
            </div>
            <div className='title-mid'>
                <div className='taste'>
                    <span>口味</span>
                    <span className='star'>
                        {
                            star(title.taste)
                        }
                    </span>
                    <span>{title.taste}</span>
                </div>
                <div className='padckage'>
                    <span>包装</span>
                    <span className='padck'>
                        {
                            star(title.padckage)
                        }
                    </span>
                    <span>{title.padckage}</span>
                </div>
            </div>
            <div className='title-right'>
                <p>5</p>
                <p>配送评价</p>
            </div>
        </div>
    )
}

export default ShopContentEvaTitle