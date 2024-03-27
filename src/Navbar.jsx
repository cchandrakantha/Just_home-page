import React from 'react'
import NavbarRow from './NavbarRow';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import StorefrontIcon from '@mui/icons-material/Storefront';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';



 function Navbar() {
  return (
    <div>
      <navbar className="nav-bar">
        <img src='https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg'/>
        <input className="navbar_input" Icon={SearchIcon} type='search'  placeholder='Search for Products'/>
        <NavbarRow Icon ={PersonPinIcon} title="Login"/>
        <NavbarRow Icon={AddShoppingCartIcon} title="Cart"/>
        <NavbarRow Icon={StorefrontIcon} title="Become a Seller" />
        <NavbarRow Icon={MoreVertIcon} />
      </navbar>
    </div>
  )
}
export default Navbar;