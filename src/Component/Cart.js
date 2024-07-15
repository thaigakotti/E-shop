import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col, Button, Input, Card, CardImg, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import { useHistory } from 'react-router-dom';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Cart = () => {
  const cartInfo = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const history = useHistory();

  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0); 

  useEffect(() => {
    setCartItems(cartInfo);
 
    const calculatedTotal = cartInfo.reduce((accumulator, currentValue) => {
      return accumulator + (currentValue.qty * currentValue.rate_inr);
    }, 0);
    setTotal(calculatedTotal);
  }, [cartInfo]);

  const placeOrder = () => {
  
    dispatch({ type: "OrderPlace", data: order });
    history.push('/Progresspage');
  };

  return (
    <React.Fragment>
      {cartItems.length === 0 ? (
        <Container style={{ paddingTop: '100px' }}>
          <ShoppingCartOutlinedIcon style={{ fontSize: 100, color: '#ccc' }} />
          <h2>Your Cart is Empty</h2>
          <p>Add items to your cart to see them here.</p>
          <Button color="primary" onClick={() => history.push('/')}>
            Continue Shopping
          </Button>
        </Container>
      ) : (
        <Container style={{ paddingTop: '100px' }}>
          <Row className='mt-5'>
            <Col>
              <h3>Cart Items</h3>
              {cartItems.map(item => (
                <Card key={item.id} className="my-3">
                  <CardBody>
                    <Row>
                      <Col xs="4" md="3">
                        <CardImg top src={item.image} alt={item.name} className="img-fluid" />
                      </Col>
                      <Col xs="8" md="6">
                        <CardTitle tag="h5">{item.name}</CardTitle>
                        <CardTitle tag="p">{item.description}</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">₹{item.rate_inr}/-</CardSubtitle>
                      </Col>
                      <Col xs="12" md="3">
                        <Row>
                          <Col xs="3">
                            <Button
                              style={{ backgroundColor: "#3F5F40" }}
                              onClick={() => dispatch({ type: "RemovetoCart", data: item })}
                            >
                              -
                            </Button>
                          </Col>
                          <Col xs="5">
                            <Input type="number" value={item.qty} readOnly />
                          </Col>
                          <Col xs="3">
                            <Button
                              style={{ backgroundColor: "#3F5F40" }}
                              onClick={() => dispatch({ type: "AddtoCart", data: item })}
                            >
                              +
                            </Button>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              ))}
            </Col>
            <Col xs="12" md="4">
              <Card className="my-5">
                <CardBody>
                  <h3>Summary</h3>
                  {cartItems.map(item => (
                    <Row key={item.id}>
                      <Col>{item.name}</Col>
                     
                      <Col>{item.qty} x {item.rate_inr} = {item.qty * item.rate_inr}</Col>
                    </Row>
                  ))}
                  <hr />
                  <Row>
                    <Col>Total = ₹{total} /-</Col>
                  </Row>
                  <Button color="primary" className="mt-3" onClick={placeOrder}>Place Order</Button>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      )}
    </React.Fragment>
  );
};

export default Cart;
