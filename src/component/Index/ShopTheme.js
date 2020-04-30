import React from 'react'

const initState = {
    origin: [],
    viewData: []
}
function reducer(state, action) {
    switch (action.type) {
        case 'addOrigin':
            return Object.assign({}, state, { origin: action.origin })
        case 'addViewData':
            return Object.assign({}, state, { viewData: action.view })
        default:
            throw new Error('action Error');
    }
}
const ThemeContext = React.createContext({})
function ShopTheme(props) {
    const [data, dispatch] = React.useReducer(reducer, initState)

    return (
        <ThemeContext.Provider value={{ data, dispatch }}>
            {
                props.children
            }
        </ThemeContext.Provider>
    )
}



export { ShopTheme, ThemeContext }