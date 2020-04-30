import React from 'react'

const ThemeContext = React.createContext([])
// {
//     id: 123;
//     title: '炸鸡翅';
//     sell: 31;
//     num: 1
// }
const initialCars = []
function reducer(state, action) {
    switch (action.type) {
        case 'add':
            if (state.length === 0) {
                let _data = action.data
                _data.num = 1
                return state.concat(_data)
            } else if (state.length !== 0) {
                for (let i = 0; i < state.length; i++) {
                    if (state[i].id === action.data.id) {
                        state[i].num++
                        return state.slice(0)
                    }
                }
                let _data = action.data
                _data.num = 1
                return state.concat(_data)
            }

        case 'minus':
            let data = state.slice(0)
            for (let i = 0; i < data.length; i++) {
                if (action.data.id === data[i].id) {
                    if (data[i].num > 1) {
                        data[i].num--
                    } else {
                        data.splice(i, 1)
                        i--
                    }
                }
            }
            return data


        case 'clear':
            return []
        default:
            throw new Error()
    }

}

function Theme(props) {

    const [state, dispatch] = React.useReducer(reducer, initialCars)
    return (
        <ThemeContext.Provider value={[state, dispatch]}>
            {
                props.children
            }
        </ThemeContext.Provider>
    )
}

export {
    ThemeContext,
    Theme
} 