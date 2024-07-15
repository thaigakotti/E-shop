import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import { useSelector } from 'react-redux';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
const OrderItem = ({ item }) => (
  <Row className="mb-2">
    <Col xs="2">
      <img src={item.image} alt={item.name} style={{ width: '100%' }} />
    </Col>
    <Col xs="5">
      <p>{item.name}</p>
      <p>{item.description}</p>
      <p>₹{item.rate_inr }/-</p>
    </Col>
    <Col xs="5">
      <p>{item.qty } x { item.rate_inr} = {item.qty * item.rate_inr}</p>
    </Col>
  </Row>
);

const Order = ({ order,index }) => (
  <Card className="mb-4">
    <CardBody>
      <CardTitle>Order Id: #{index+1}</CardTitle>
      <CardSubtitle>Total: ₹{order.total}/-</CardSubtitle>
      <h5 className="mt-3">Items</h5>
      {order.items.map(item => (
        <OrderItem key={item.id} item={item} />
      ))}
    </CardBody>
  </Card>
);

const OrderSummary = () => {
    const [OrderisCollection, setOrderisCollection] = useState([])
    const orders = useSelector(state => state.orders)
    useEffect(() => {
    
console.log(orders)
      setOrderisCollection(orders)
    }, [])

const history = useHistory()
  

  return (
    <React.Fragment>

   
    {orders.length === 0 ? (
        <Container style={{paddingTop:'100px'}}>
        <ReceiptLongIcon style={{ fontSize: 100, color: '#ccc' }} />
        <h2>Your Order is Empty</h2>
        <p>Add items to your cart to see them here.</p>
        <Button color="primary" onClick={() => history.push('/')}>
          Continue Shopping
        </Button>
      </Container>
    ):
    <Container  style={{paddingTop:'100px'}}>
        
      <h3>Orders</h3>
       {orders.map((order,index) => (
        <Order key={order.id} order={order} index={index} />
      ))} 
    </Container>
}
     </React.Fragment>
  );
};

export default OrderSummary;
