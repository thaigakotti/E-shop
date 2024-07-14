import React, { useEffect, useState } from 'react';
import { Card, CardBody, CardTitle, Button, Input, InputGroup } from 'reactstrap';
import './Product.css'; // Import your CSS file for styles
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function Product({ photo, title, Productdata, Qty, Buttons }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [CartInfo, setCartInfo] = useState([]);
  const cart = useSelector(state => state.cart);

  useEffect(() => {
    setCartInfo(cart);
  }, [cart]);

  return (
    <div className='mt-5 ml-2'>
      <Card className="product-card">
        <img
          className="img-fluid" 
          alt="Sample"
          style={{height:'250px',width:'300px'}}
          src={photo}
          onClick={() => {
            history.push(`/Productsinfo`, { productinfo: Productdata });
          }}
        />
        <div>
          <CardBody>
            <CardTitle tag="h5">
              {title}
            </CardTitle>
            {Buttons}
          </CardBody>
        </div>
      </Card>
    </div>
  );
}

export default Product;
