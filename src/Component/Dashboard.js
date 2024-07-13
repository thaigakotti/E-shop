import React, { useState } from 'react'
import Category from './Category'
import { Breadcrumb, BreadcrumbItem, Col, Container, Row } from 'reactstrap'
import Vegitable from '../assests/vegitable.jpg'
import Fruits from '../assests/fruits.jpg'
import foods from '../assests/foods.jpg'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
function Dashboard(props) {

  const [Categorycollection, setCategorycollection] = useState([

    {
      id:1,
      CategoryName:"Vegetables",
      Image:Vegitable
    },
    {
      id:2,
      CategoryName:"Fruits",
      Image:Fruits
    },
    {
      id:3,
      CategoryName:"Foods",
      Image:foods
    }
  ])

  const history = useHistory()
  return (
    <Container>
       <Breadcrumb className='mt-2 ml-2'>
    <BreadcrumbItem>
     
        Category
     
    </BreadcrumbItem>

  </Breadcrumb>
    <Row className="justify-content-center">
       {Categorycollection.map((data) => (
 <Col lg='3' key={data.id}  onClick={() => {
  history.push(`/Products/${data.CategoryName}`,{CategoryInfo:data})
 }}>
 <Category photo={data.Image} title={data.CategoryName}/>
 </Col>
       ))}
     
       
      
     
      </Row>
 </Container>
   
  )
}

export default Dashboard