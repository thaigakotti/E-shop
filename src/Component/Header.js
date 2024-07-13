import React from 'react'
import { Col, Navbar, NavbarBrand, Row } from 'reactstrap'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import Logo from '../assests/logo.jpg'
import { useSelector } from 'react-redux';

function Header() {
  const count =  useSelector(state => state.counter)
  
  return (
    <div >
        
        <Navbar
  className='py-3'
    style={{ backgroundColor: '#3F5F40', color:"#fafafa", }} light
  >
    <NavbarBrand href="/">
      <img
        alt="logo"
        src={Logo}
        style={{
          height: 50,
          width: 50,
          objectFit:'contain'
        }}
        
      />
      {/* <h6 style={{color:"#fafafa"}}>E-Shop</h6> */}
    </NavbarBrand>
    <NavbarBrand href="/">
<ShoppingCartOutlinedIcon color='#fafafa' />
<h6>{count}</h6>
    </NavbarBrand>
 
    
  </Navbar>
    </div>
  )
}

export default Header