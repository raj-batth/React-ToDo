import React from 'react'

import {Link} from 'react-router-dom'

function Header(){

    return(
        <header style={headerStyle}>
            <h1>TodoList</h1>
            <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about"> About </Link>
        </header>
    )
}


const headerStyle = {
    color: '#fff',
    textAlign: 'center',
    marginTop:'20px',
    marginBottom:'60px',
    padding: '10px',
    fontSize: '18px',
  }
  
  const linkStyle = {
    marginTop:'20px',
    color: '#fff',
    textDecoration: 'none'
  }
  
export default Header