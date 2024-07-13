import React from 'react';
import { Card, CardBody, CardTitle, Button, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import './Product.css'; // Import your CSS file for styles

function Product({ photo, title }) {
  return (
    <div className='mt-5 ml-2'>
      
      <Card className="product-card">
        <img
          alt="Sample"
          src={photo}
        />
        <div >
          <CardBody>
            <CardTitle tag="h5">
              {title}
            </CardTitle>
            {/* <CardSubtitle
              className="mb-2 text-muted"
              tag="h6"
            >
              Card subtitle
            </CardSubtitle>
            <CardText>
              Some quick example text to build on the card title and make up the bulk of the card‘s content.
            </CardText> */}
            <Button className='primary'>
             Add To Cart
            </Button>
          </CardBody>
        </div>
      </Card>
    </div>
  );
}

export default Product;
