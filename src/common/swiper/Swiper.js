import React from 'react'

import './Swiper.scss'
function Swiper(props) {
    const contentEl = React.useRef(null)

    React.useEffect(() => {
        if (props.setSwiper) props.setSwiper(() => {
            return swiperTo
        })
    }, [])

    function swiperTo(num) {
        let el = contentEl.current
        let len = props.children.length
        el.style.transform = `translateX(-${100 * (num / len)}%)`
    }

    return (
        <div className='common-swiper'>
            <ul style={{ width: `${props.children.length * 100}%` }}
                ref={contentEl}>
                {
                    props.children
                }
            </ul>
        </div>
    )
}

export default Swiper