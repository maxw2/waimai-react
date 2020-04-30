import React from 'react'
import { ThemeContext } from './ShopTheme'

import './ShopTagSort.scss'
function ShopTagSort() {
    const theme = React.useContext(ThemeContext)
    const origin = theme.data.origin
    const dispatch = theme.dispatch

    const dataList = [{
        name: '综合排序',
        fn: function () {
            dispatch({
                type: 'addViewData',
                view: origin
            })
        }
    }, {
        name: '速度最快',
        fn: () => {
            const ori = origin.slice(0)
            ori.sort((o1, o2) => {
                return o2.time - o1.time
            })
            dispatch({
                type: 'addViewData',
                view: ori
            })

        }
    }, {
        name: '评价最高',
        fn: () => {
            const ori = origin.slice(0)
            ori.sort((o1, o2) => {
                return o2.start - o1.start
            })
            dispatch({
                type: 'addViewData',
                view: ori
            })

        }
    }, {
        name: '起送价最低',
        fn: () => {
            const ori = origin.slice(0)
            ori.sort((o1, o2) => {
                return o1.pick - o2.pick
            })
            dispatch({
                type: 'addViewData',
                view: ori
            })

        }
    }, {
        name: '配送费最低',
        fn: () => {
            const ori = origin.slice(0)
            ori.sort((o1, o2) => {
                return o1.delivery - o2.delivery
            })
            dispatch({
                type: 'addViewData',
                view: ori
            })

        }
    }, {
        name: '人均高到低',
        fn: () => {
            const ori = origin.slice(0)
            ori.sort((o1, o2) => {
                return o2.capita - o1.capita
            })
            dispatch({
                type: 'addViewData',
                view: ori
            })

        }
    }, {
        name: '人均低到高',
        fn: () => {
            const ori = origin.slice(0)
            ori.sort((o1, o2) => {
                return o1.capita - o2.capita
            })
            dispatch({
                type: 'addViewData',
                view: ori
            })

        }
    },]
    const [data, setData] = React.useState(dataList[0].name)

    // active
    function active(ev) {
        let el = ev.currentTarget
        if (ev.activeEl) {
            ev.activeEl.classList.remove('active')
            el.classList.add('active')
            return el
        } else {
            el.classList.add('active')
            return el
        }
    }
    // mask 
    function mask(ev, el) {
        let target = ev.currentTarget
        let maskEl = document.querySelector('.index .index-mask')
        let sortEl = document.querySelector('.index .index-shop .tag .tag-list .sort-list')
        let filterEl = document.querySelector('.index .index-shop .tag .tag-list .filter')
        let listStyle = sortEl.getAttribute('style')


        if (listStyle) {
            maskEl.style = ''
            sortEl.style = ''
            filterEl.style = ''
        } else {
            maskEl.style.display = 'block'
            sortEl.style.display = 'block'
            filterEl.style.display = ''
        }

    }
    // scrollTo
    function scrollTo() {
        let indexEl = document.querySelector('.index')
        let itemEl = document.querySelector('.index .index-item')
        let tagTitleEl = document.querySelector('.index .index-shop .tag .tag-shop-title')
        let shopTop = itemEl.clientHeight + tagTitleEl.clientHeight + 20
        // console.log(shopTop)
        indexEl.scrollTo({
            top: shopTop,
            behavior: 'smooth'
        })
    }
    function sortData(ev) {
        let el = ev.target
        let dataSort = el.getAttribute('data-sort')
        let dataIndex = el.getAttribute('data-index')
        if (dataSort) {
            setData(el.getAttribute('data-sort'))
            dataList[dataIndex].fn()
        }
    }
    function clickSort(ev) {
        const sortEl = document.querySelector('.index .index-shop .tag .sort-list')
        ev.activeEl = active(ev)
        ev.btnEl = mask(ev, sortEl)
        sortData(ev)
        scrollTo()
    }
    return (
        <li className='tag-sort' onClick={clickSort}>{data}<i className='arrow'></i>
            <ul className='sort-list'>
                {
                    dataList.map((val, index) => (
                        <li className='shop-tag-sort'
                            data-sort={val.name}
                            data-index={index}
                            key={index}>{val.name}</li>
                    ))
                }
            </ul>
        </li>
    )
}

export default ShopTagSort