import Button from 'react-bootstrap/Button';
import React from 'react'
import Badge from 'react-bootstrap/Badge';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <div style={{background:'blueviolet'}}>
    <div style={{height:'70px'}} className='w-100 text-white  d-flex  justify-content-between px-5 py-3'>
       <div className='d-flex ms-1 '>
        <Link style={{textDecoration:'none',color:'white'}} to={'/'}><h4><i class="fa-solid fa-truck-fast"></i>&nbsp;E Cart</h4>
        </Link>
        </div>
        <div className='d-flex me-5 text-white'>
        <Link to={'/wishlist'}>
        <Button className='me-4 fw-bold ' variant="outline-light"><i class="fa-solid fa-heart text-danger "></i>&nbsp;WishList
        &nbsp;<Badge bg="white" className='text-black'>9</Badge>
        </Button>
        </Link>

        <Link to={'/cart'}>
        <Button className='fw-bold ' variant="outline-light"><i class="fa-solid fa-cart-shopping text-success"></i>
        &nbsp;Cart
        &nbsp;<Badge bg="white" className='text-black'>9</Badge>
        </Button>
        </Link>
        </div>
    </div>
    </div>
    
  )
}

export default Header