import React from 'react'

import Title from './Title'
import Item from './Item'
import Shop from './Shop'
import Mask from './Mask'

import './Index.scss'
function Index() {
    let indexEl = null
    let inputName = null
    let tagEl = null
    let shopTop = null


    // scrollInput
    function scrollInput(ev) {
        if (!indexEl) {
            indexEl = ev.currentTarget

            inputName = document.querySelector('.index .index-title .coordinate')
            tagEl = document.querySelector('.index .index-shop .tag .tag-list')

            shopTop = tagEl.getBoundingClientRect().top + indexEl.scrollTop - 50
        }

        let scrollTop = indexEl.scrollTop


        // input
        if (scrollTop > shopTop - 20) {
            inputName.style.maxWidth = '0px'
        } else {
            inputName.style.maxWidth = ''
        }
        // scroll
        if (scrollTop > shopTop) {
            tagEl.style.position = 'fixed'
            tagEl.style.top = '50px'
        } else {
            tagEl.style = ''
        }





    }
    return (
        <div className='index'
            onScroll={scrollInput}
            // onClick={clearMask} 
            style={{ height: document.documentElement.clientHeight }}
        >
            <Title />
            <div className='index-content'>
                <Item />
                <Shop />
                {/* <Mask /> */}
            </div>
        </div>
    )
}

export default Index