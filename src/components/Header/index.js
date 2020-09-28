import React from 'react'
import Image from 'react-bootstrap/Image'
import TodoMundo from '../../assets/images/todomundo.jpg'

function Header () {
    return(
        <Image style={{width: '100%'}} src={TodoMundo} />
    )
}

export default Header