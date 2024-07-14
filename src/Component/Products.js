import React, { useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min'
import {  Button, Col, Container, Input, InputGroup, Row } from 'reactstrap'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Produtsp from '../assets/fruits.jpg'
import Product from './Product'
// import { products } from './Productlist'
import { useDispatch, useSelector } from 'react-redux'
import { toast ,ToastContainer} from 'react-toastify'
import { Typography } from '@mui/material';

function Products(props) {
   const location = useLocation()
   const history = useHistory()
   const dispatch = useDispatch()
   const CartInfo =  useSelector(state => state.cart)
   const [CartProduct, setCartProduct] = useState([])
   const [ProductCollection, setProductCollection] = useState([])
   const Productvalues =  useSelector(state => state.products)
   useEffect(() => {
     setProductCollection(Productvalues)
   setCartProduct(CartInfo)
   }, [CartProduct, ProductCollection,Productvalues])
   

  return (
    <Container style={{paddingTop:'100px'}}>
        
        {/* <Breadcrumb className='mt-2 ml-2'>
    <BreadcrumbItem style={{cursor:'pointer'}} onClick={() => {
      history.push('/')
    }}>
     
        <h3>Category / {location.state.CategoryInfo.CategoryName}</h3>
     
    </BreadcrumbItem>
    {/* <BreadcrumbItem active>
    
    </BreadcrumbItem> 
  </Breadcrumb> */}

<Breadcrumbs aria-label="breadcrumb">
  <Link underline="hover" color="inherit" >
  Category
  </Link>

  <Typography color="text.primary">{location.state.CategoryInfo.CategoryName}</Typography>
</Breadcrumbs>

  <Row  >
    {ProductCollection.filter(d => d.category_id === location.state.CategoryInfo.id).map((data, index) => (

  
    <Col lg='3' key={index} >
    <Product title={data.name} photo={data.image}
    Productdata={data}
    Qty={data.qty}
    Buttons={ data.iscart === 'N'  ? (
      <Button style={{backgroundColor:'#3F5F40'}} onClick={() => {
        dispatch({ type: "AddtoCart", data })
        toast.success('Product Added In The Cart', {autoClose:400});
    
      }}>Add To Cart </Button>

  ):
 
  <InputGroup className='mt-2'>

<Button style={{backgroundColor:'#3F5F40'}} disabled={data.qty ===1} onClick={() => dispatch({ type: "RemovetoCart", data })}>-</Button>

<Input
readOnly
type="number"
value={data.qty}
// onChange={(handleChange)}
min="1"
style={{ textAlign: 'center' }}
/>

<Button style={{backgroundColor:'#3F5F40'}} onClick={() => {
  
  dispatch({ type: "AddtoCart", data})
//   const NewproductUpdate =[...ProductCollection]
//   NewproductUpdate[index].qty = data.qty+1
//  // setProductCollection(NewproductUpdate)
//   console.log(NewproductUpdate)
  
  }}>+</Button>

</InputGroup>
}
    />
 
    </Col>
    
      ))}

  </Row>
  <ToastContainer />
    </Container>
  )
}

export default Products