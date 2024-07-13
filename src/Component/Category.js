import React from 'react';
import { Card, CardBody, CardTitle, Button, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import './Category.css'; 

function Category({ photo, title }) {
  return (
    <div className='mt-5 ml-2'>
      
      <Card className="category-card">
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
            {/* <Button>
              Shop Now
            </Button> */}
          </CardBody>
        </div>
      </Card>
    </div>
  );
}

export default Category;
