import Mock from 'crash-mock'

import indexData from './data/index'
import menuData from './data/menu'

function initMock() {
    let data = [].concat(indexData,menuData)
    return new Mock({
        mode: 'ajax',
        response: data
    })
}

export default initMock