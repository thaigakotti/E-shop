import React from 'react'
import { useLocation } from 'react-router-dom/cjs/react-router-dom'
import { Breadcrumb, BreadcrumbItem, Col, Row } from 'reactstrap'
import { useDispatch } from 'react-redux';
function Productinfo() {
    const location = useLocation()
    const dispatch = useDispatch()
  return (
    <div>
     <Breadcrumb className='mt-2 ml-2'>
    <BreadcrumbItem>
     
    {location.state.productinfo.category_name}
     
    </BreadcrumbItem>
    <BreadcrumbItem active>
      {location.state.productinfo.name}
    </BreadcrumbItem>
  </Breadcrumb>

  <Row >
<Row>
<Col lg='6'>
</Col>
</Row>
<Row>
<Col lg='6'>
</Col>
</Row>
  </Row>


    </div>
  )
}

export default Productinfo