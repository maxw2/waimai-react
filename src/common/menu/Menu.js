import React from 'react'

import MenuLeft from './MenuLeft'
import MenuRight from './MenuRight'

import './Menu.scss'
function Menu(props) {
    const [data, setData] = React.useState([])
    function creatMenuData() {
        let left = document.querySelector('.common-menu-left').children[0]
        let right = document.querySelector('.common-menu-right').children[0]
        let leftChild = left.children
        let rightChild = right.children
        let arr = []

        for (let i = 0; i < leftChild.length; i++) {
            let obj = [{
                el: left,
                content: leftChild[i],
                top: leftChild[i].offsetTop
            }, {
                el: right,
                content: rightChild[i],
                top: rightChild[i].offsetTop
            }]

            arr.push(obj)
        }
        setData(arr)
    }
    React.useEffect(() => {
        setTimeout(()=>{
            creatMenuData()
        },500)
        
    }, [])
    return (
        <div className='common-menu'>
            {
                React.Children.map(props.children, (child) => {
                    return React.cloneElement(child, { menuData: data })
                })
            }
        </div>
    )
}

Menu.Left = MenuLeft
Menu.Right = MenuRight

export default Menu