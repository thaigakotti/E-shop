import React, { useEffect, useState } from 'react';
import { Card, CardBody, CardTitle, Button,Input, InputGroup } from 'reactstrap';
import './Product.css'; // Import your CSS file for styles
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function Product({ photo, title , Productdata, Qty, Buttons}) {
const dispatch = useDispatch()
const history = useHistory()
const [CartInfo, setCartInfo] = useState([])
const cart =  useSelector(state => state.cart)
useEffect(() => {
 
  
  setCartInfo(cart)
 
}, [CartInfo])

  return (
    <div className='mt-5 ml-2'>
      
      <Card className="product-card">
        <img
          alt="Sample"
          src={photo}
          onClick={()=> {
            history.push(`/Productsinfo`,{productinfo:Productdata})
          }}
        />
        <div >
          <CardBody>
            <CardTitle tag="h5">
              {title}
            </CardTitle>

            {/* <Button className='primary' onClick={() => dispatch({ type: "AddtoCart", Productdata })}>
            +
            </Button>
            <Button className='primary' onClick={() => dispatch({ type: "DECREMENT",Productdata })}>
            -
            </Button> */}
            {/* {CartInfo.findIndex(item => item.id === Productdata.id) ? (
                <Button style={{backgroundColor:'#3F5F40'}} onClick={() => dispatch({ type: "AddtoCart", Productdata })}>Add To Cart</Button>
     
            ):
           
            <InputGroup className='mt-2'>
    
        <Button style={{backgroundColor:'#3F5F40'}} onClick={() => dispatch({ type: "AddtoCart", Productdata })}>-</Button>
     
      <Input
        type="number"
        value={Qty}
       // onChange={(handleChange)}
        min="1"
        style={{ textAlign: 'center' }}
      />
   
        <Button style={{backgroundColor:'#3F5F40'}} onClick={() => dispatch({ type: "DECREMENT", ...Productdata,qty:Productdata.qty+1 })}>+</Button>

    </InputGroup>
     } */}
     {Buttons}
          </CardBody>
        </div>
      </Card>
    </div>
  );
}

export default Product;
