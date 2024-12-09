import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
        <div className="header-contents">
            <h2>Order your favourite food here</h2>
            <p>Browse through our wide selection of delicious dishes and get<br/>them delivered right to your doorstep!</p>
            <a href="#explore-menu"><button className='header-contents-button'>View Menu</button></a>
        </div>
    </div>
  )
}

export default Header