import React from 'react'
import { Card, Col, Row,Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div >
      <Row className='mt-5 container '>
        <Col className='mb-5' sm={12} md={6} lg={4} xl={3}>
        <Card className='shadow rounded bg-white' style={{ width: '18rem' }}>
      <Link to={'/view/1'}><Card.Img style={{height:'180px'}} variant="top" src="https://i.dummyjson.com/data/products/1/thumbnail.jpg" />
      </Link>
      <Card.Body>
        <Card.Title className='text-black'>Product Name</Card.Title>
        <div className="d-flex justify-content-between">
          <Button className='btn bg-white border-0   fs-5'><i class="fa-solid fa-heart text-danger "></i></Button>
          <Button className='btn bg-white border-0   fs-5'><i class="fa-solid fa-cart-plus text-success "></i></Button>
        </div>
      </Card.Body>
    </Card>
        </Col>
      </Row>

    </div>
  )
}

export default Home