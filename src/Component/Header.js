import React from 'react'
import { Col, Navbar, NavbarBrand, Row } from 'reactstrap'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
function Header() {
  return (
    <div>
        
        <Navbar
    className="mp-2 my-0"
    style={{ backgroundColor: '#748269', color:"#fafafa" }} light
  >
    <NavbarBrand href="/">
      {/* <img
        alt="logo"
       // src="/logo-white.svg"
        style={{
          height: 40,
          width: 40
        }}
        
      /> */}
      <h6>E-Shop</h6>
    </NavbarBrand>
    <NavbarBrand href="/" style={{right:0}}>
      {/* <img
        alt="logo"
       // src="/logo-white.svg"
        style={{
          height: 40,
          width: 40
        }}
        
      /> */}
      {/* <h6>E-Shop</h6> */}
      <Row>
      <Col lg="3">
      <ShoppingCartOutlinedIcon color='#fafafa'/>
      </Col>
      <Col lg="3">
   
      </Col>
      <Col lg="3">
      <SettingsIcon color='#fafafa'/>
      </Col>
      </Row>
    </NavbarBrand>
   
    
  </Navbar>
    </div>
  )
}

export default Header