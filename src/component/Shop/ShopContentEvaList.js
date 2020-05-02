import React from 'react'


import './ShopContentEvaList.scss'
function ShopContentEvaList(props) {
    return (
        <div className='shop-content-eva-list'>
            {
                props.list.map((val, index) => (
                    <div className='list' key={index}>
                        <div className='left'>
                            <img src={val.nameImg} alt='logo' />
                        </div>
                        <div className='mid'>
                            <div className='title'>
                                <span>{val.name}</span>
                                <span>{val.date}</span>
                            </div>
                            <div className='date'>{`${val.time}分钟送达`}</div>
                            <div className='content'>{val.content}</div>
                            {
                                val.contentImg ?
                                    <div className='contentImg'>
                                        {
                                            val.contentImg.map((val, index) => {
                                                return <img src={val} alt='content' key={index} />
                                            })
                                        }
                                    </div> : null
                            }
                            <div className='menu'>
                                <i className='fa fa-thumbs-o-up'></i>
                                {val.menu}
                            </div>
                        </div>
                    </div>

                ))
            }
        </div >
    )
}

export default ShopContentEvaList