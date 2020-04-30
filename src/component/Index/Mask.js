import React from 'react'


import './Mask.scss'
function Mask() {
    function clearMask(ev) {
        let maskEl = ev.currentTarget
        let sortList = document.querySelector('.index .sort-list')
        let filterList = document.querySelector('.index .filter')
        maskEl.style = ''
        sortList.style = ''
        filterList.style = ''
    }

    return (
        <div className='index-mask'
            onClick={clearMask}></div >
    )
}

export default Mask