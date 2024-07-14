import React, { useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min'
import { Breadcrumb, BreadcrumbItem, Button, Col, Input, InputGroup, Row } from 'reactstrap'

import Produtsp from '../assests/fruits.jpg'
import Product from './Product'
// import { products } from './Productlist'
import { useDispatch, useSelector } from 'react-redux'

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
    <div>
        
        <Breadcrumb className='mt-2 ml-2'>
    <BreadcrumbItem>
     
        Category
     
    </BreadcrumbItem>
    <BreadcrumbItem active>
      {location.state.CategoryInfo.CategoryName}
    </BreadcrumbItem>
  </Breadcrumb>

  <Row  >
    {ProductCollection.filter(d => d.category_id === location.state.CategoryInfo.id).map((data, index) => (

  
    <Col lg='3' key={index} >
    <Product title={data.name} photo={Produtsp}
    Productdata={data}
    Qty={data.qty}
    Buttons={ data.iscart === 'N'  ? (
      <Button style={{backgroundColor:'#3F5F40'}} onClick={() => dispatch({ type: "AddtoCart", data })}>Add To Cart </Button>

  ):
 
  <InputGroup className='mt-2'>

<Button style={{backgroundColor:'#3F5F40'}} onClick={() => dispatch({ type: "RemovetoCart", data })}>-</Button>

<Input
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
    </div>
  )
}

export default Products