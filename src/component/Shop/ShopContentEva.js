import React from 'react'
import { useParams } from 'react-router-dom'
import { axiosShopMenuEva } from '../../axios/axiosShop'
import ShopContentEvaTitle from './ShopContentEvaTitle'
import ShopContentEvaList from './ShopContentEvaList'

import './ShopContentEva.scss'
import Loading from '../../common/loading/Loading'
function ShopContentEva() {
    const [data, setData] = React.useState(null)
    const params = useParams()
    React.useEffect(() => {
        const id = params.id
        axiosShopMenuEva(id)
            .then((res) => {
                setData(res.data.data)
            })
    }, [])
    let content = document.querySelector('.shop')
    function scrollTo_content(ev) {
        let contentTop = content.scrollTop
        let top = ev.currentTarget.scrollTop
        if (Math.abs(top - contentTop) > 50) return
        content.scrollTo(0, top)
    }
    return (
        <div className='shop-content-eva'
            onScroll={scrollTo_content}
            style={{ height: document.documentElement.clientHeight - 40 }}
        >
            {
                data ?
                    <>
                        <ShopContentEvaTitle title={data.title} />
                        <ShopContentEvaList list={data.Evaluation} />
                    </> : null
            }

        </div>
    )
}

export default ShopContentEva