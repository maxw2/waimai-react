import React from 'react'
import loading from './Rolling-1s-200px.svg'

import './Loading.scss'
function Loading(){
    return (
        <div className='common-loading'>
            <img src={loading} alt='loading' />
        </div>
    )
}

export default Loading