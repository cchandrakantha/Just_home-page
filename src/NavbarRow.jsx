import React from 'react'


function NavbarRow({Icon ,title}) {
  return (
    <div className='nav-items'>
      <Icon className="nav-icons"/>
      <h2 className='nav-text'>{title}</h2>
    </div>
  )
}

export default NavbarRow;