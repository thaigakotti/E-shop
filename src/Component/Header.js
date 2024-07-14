import React from 'react';
import { Navbar, NavbarBrand, NavbarText, Row, Col } from 'reactstrap';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import Logo from '../assets/1.webp';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Badge } from '@mui/material';
import './Header.css';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';

function Header() {
  const history = useHistory();
  const count = useSelector((state) => state.cart);
  const orders = useSelector((state) => state.orders);
  return (
    <div>
      <Navbar
        className="py-3"
        style={{ backgroundColor: '#3F5F40', color: '#fafafa' }}
        light
        fixed="top"
      >
        <Row className="align-items-center" style={{ width: '100%' }}>
          <Col>
            <NavbarBrand onClick={() => history.push('/')}>
              <img
                alt="logo"
                src={Logo}
                style={{
                  cursor: 'pointer',
                  height: 50,
                  width: 50,
                  objectFit: 'contain',
                }}
              />
            </NavbarBrand>
          </Col>
         
          <Col className="d-flex  gap-2 justify-content-end">
            <NavbarBrand
              href="#"
              onClick={() => {
                history.push('/cart');
              }}
            >
              <Badge badgeContent={count.length === 0 ? 0 : count.length} color="success">
                <ShoppingCartOutlinedIcon style={{ color: '#fafafa' }} />
              </Badge>
            </NavbarBrand>
            <NavbarBrand
              href="#"
              onClick={() => {
                history.push('/OrderPage');
              }}
            >
               <Badge badgeContent={orders.length === 0 ? 0 : orders.length} color="success"> 
                <ReceiptLongIcon style={{ color: '#fafafa' }} />
                
               </Badge> 
            </NavbarBrand>
          </Col>
        </Row>
      </Navbar>
    </div>
  );
}

export default Header;
