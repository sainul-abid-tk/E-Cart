import React from 'react'
import { Card, Col, Row,Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
function Wishlist() {
  const wishlist=useSelector(state=>state.wishlistSlice.wishlist)
  return (
    <div >
        {wishlist.length>0?wishlist.map((product)=>(
          <Row className='mt-5 container '>
         <Col  className='mb-5' sm={12} md={6} lg={4} xl={3}>
          <Card className='shadow rounded bg-white' style={{ width: '18rem' }}>
        <Link to={`/view/${product.id}`}><Card.Img style={{height:'180px'}} variant="top" src={product.thumbnail} />
        </Link>
        <Card.Body>
          <Card.Title className='text-black'>{product.title.slice(0,20)}...</Card.Title>
          <div className="d-flex justify-content-between">
            <Button onClick={()=>dispatch(addToWishList(product))} className='btn bg-white border-0   fs-5'><i class="fa-solid fa-heart-circle-xmark text-danger "></i></Button>
            <Button className='btn bg-white border-0   fs-5'><i class="fa-solid fa-cart-plus text-success "></i></Button>
          </div>
        </Card.Body>
      </Card>
          </Col>
          </Row>
        )):
        <div className='text-center bg-white'>
          <img style={{width:'50%',height:'500px'}} src="https://cdn.dribbble.com/users/2046015/screenshots/4591856/first_white_girl_drbl.gif" alt="" />
          <h1 className='mt-3 text-black '>Your Wishlist is Empty</h1>
        </div>
        }
      
    </div>
  )
}

export default Wishlist