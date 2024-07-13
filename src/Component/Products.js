import React from 'react'
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min'
import { Breadcrumb, BreadcrumbItem, Col, Row } from 'reactstrap'

import Produtsp from '../assests/fruits.jpg'
import Product from './Product'
import { products } from './Productlist'

function Products(props) {
   const location = useLocation()
  const history = useHistory()
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
    {products.filter(d => d.category_id === location.state.CategoryInfo.id).map((data, index) => (

  
    <Col lg='3' key={index}>
    <Product title={data.name} photo={Produtsp
  
    }
    info={data}
    
    />

    </Col>
      ))}

  </Row>
    </div>
  )
}

export default Products