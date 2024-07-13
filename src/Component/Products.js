import React from 'react'
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min'
import { Breadcrumb, BreadcrumbItem, Col, Row } from 'reactstrap'

import Produtsp from '../assests/fruits.jpg'
import Product from './Product'
function Products(props) {
   const location = useLocation()
  
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

  <Row >
    <Col lg='3'>
    <Product title={"test"} photo={Produtsp

    } />
    </Col>
    <Col lg='3'>
    <Product title={"test"} photo={Produtsp

    } />
    </Col>
    <Col lg='3'>
    <Product title={"test"} photo={Produtsp

    } />
    </Col>
    <Col lg='3'>
    <Product title={"test"} photo={Produtsp

    } />
    </Col>
    <Col lg='3'>
    <Product title={"test"} photo={Produtsp

    } />
    </Col>
    <Col lg='3'>
    <Product title={"test"} photo={Produtsp

    } />
    </Col>
  </Row>
    </div>
  )
}

export default Products