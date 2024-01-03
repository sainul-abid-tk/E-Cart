import React, { useEffect } from 'react'
import { Card, Col, Row,Button,Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchProducts } from '../Redux/Slice/productSlice'
import { addToWishList } from '../Redux/Slice/wishlistSlice'

function Home() {
  const dispatch=useDispatch()
  const {loading,products,error}=useSelector((state)=>state.productSlice)
  useEffect(()=>{
    dispatch(fetchProducts())
  },[])
  return (
    <div >
      {
        loading?<div className='text-center mt-5 '><Spinner animation="border" variant="warning" />
        </div>:
        <Row className='m-5 container '>
        {products.length>0&&products.map((product,index)=>(
          <Col key={index} className='mb-5' sm={12} md={6} lg={4} xl={3}>
          <Card className='shadow rounded bg-white' style={{ width: '18rem' }}>
        <Link to={`/view/${product.id}`}><Card.Img style={{height:'180px'}} variant="top" src={product.thumbnail} />
        </Link>
        <Card.Body>
          <Card.Title className='text-black'>{product.title.slice(0,20)}...</Card.Title>
          <div className="d-flex justify-content-between">
            <Button onClick={()=>dispatch(addToWishList(product))} className='btn bg-white border-0   fs-5'><i class="fa-solid fa-heart text-danger "></i></Button>
            <Button className='btn bg-white border-0   fs-5'><i class="fa-solid fa-cart-plus text-success "></i></Button>
          </div>
        </Card.Body>
      </Card>
          </Col>
        ))}
      </Row>
      }

    </div>
  )
}

export default Home