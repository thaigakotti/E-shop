import React, { useEffect, useState } from 'react';
import { Card, CardBody, CardTitle, CardText, CardImg, Row, Col, Button, InputGroup, Input,  Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Productinfo.css'; 
import Imageas1 from '../assets/fruits.jpg'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Breadcrumbs, Link, Typography } from '@mui/material';

const ProductCard = () => {
  // const CartInfo =  useSelector(state => state.cart)
  // const [CartProduct, setCartProduct] = useState([])
 const [ProductCollection, setProductCollection] = useState([])
   const Productvalues =  useSelector(state => state.products)
  // useEffect(() => {
  //   setProductCollection(Productvalues)
  // setCartProduct(CartInfo)
  // }, [CartProduct, ProductCollection,Productvalues])
  const dispatch = useDispatch()
  const location = useLocation()
  const locationdata =location.state.productinfo
  console.log(locationdata)
  const product =  Productvalues.filter((data) => data.id === locationdata.id)
  useEffect(() => {
  
   setProductCollection(product)
   
  }, [ ])
  const history =useHistory()
  return (
    <Container style={{paddingTop:'100px'}}>
        {/* <Breadcrumb className='mt-5 ml-2' onClick={() => {
      history.push(`/Products/${locationdata.category_name}`, {CategoryInfo:locationdata})
    }}>
    <BreadcrumbItem>
     
    {locationdata.category_name}
     
    </BreadcrumbItem>
    <BreadcrumbItem active>
      {locationdata.name}
    </BreadcrumbItem>
  </Breadcrumb> */}

<Breadcrumbs aria-label="breadcrumb">
  <Link underline="hover" color="inherit" >
  {locationdata.category_name}
  </Link>

  <Typography color="text.primary">  {locationdata.name}</Typography>
</Breadcrumbs>

    {ProductCollection.map((data) => (

  
    <Card className="product-card">
      <Row noGutters>
        <Col >
          <CardImg top width="100%" src={data.image} alt="Nike N012 Running Shoes (Gray)" />
        </Col>
        <Col >
          <CardBody>
            <CardTitle tag="h5">{data.name}</CardTitle>
            <CardText>
             
              <div className="description">
              {data.description}
              </div>
              <div className="rating">
                <span>★ 4.2</span>
                <span>234 Reviews</span>
              </div>
              <div className="price">
               
                <span className="discounted-price">₹ {data.rate_inr}</span>
                
              </div>
              {/* <div className="specification">
                <h6>Specification:</h6>
                <ul>
                  <li>High Quality</li>
                  <li>Leather</li>
                  <li>All Sizes available</li>
                  <li>4 Different Color</li>
                </ul>
              </div> */}
              {/* <div className="services">
                <h6>Services:</h6>
                <ul>
                  <li>10 Days Replacement</li>
                  <li>Cash on Delivery available</li>
                </ul>

                
              </div> */}
             {ProductCollection.at(0).iscart === 'N'  ? (
      <Button style={{backgroundColor:'#3F5F40'}} onClick={() => {
        dispatch({ type: "AddtoCart", data:locationdata })
        
        const newdata = [...ProductCollection]
        newdata[0].qty = data.qty
         newdata[0].iscart = "Y"
        console.log(newdata)
        toast.success('Product Added In The Cart', {autoClose:400});

        setProductCollection(newdata)
      }
        
    }>Add To Cart </Button>

  ):
 
  <InputGroup className='mt-2'>

<Button
disabled={data.qty===1}
style={{backgroundColor:'#3F5F40'}} onClick={() =>{ 
  
  dispatch({ type: "RemovetoCart",data: locationdata })
  
  const newdata = [...ProductCollection]
  newdata[0].qty = data.qty-1
 
 setProductCollection(newdata)
  }}>-</Button>

<Input
type="number"
value={data.qty}
readOnly
// onChange={(handleChange)}
min="1"
style={{ textAlign: 'center' }}
/>

<Button style={{backgroundColor:'#3F5F40'}} onClick={() => {
  
  dispatch({ type: "AddtoCart", data:locationdata})
  const newdata = [...ProductCollection]
  newdata[0].qty = data.qty+1
 setProductCollection(newdata)
  }}>+</Button>

</InputGroup>}

            </CardText>
          </CardBody>
        </Col>
      </Row>
    </Card>
      ))}
      <ToastContainer />
    </Container>
  );
};

export default ProductCard;
