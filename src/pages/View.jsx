import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addToWishList } from '../Redux/Slice/wishlistSlice'

function View() {
  const {id}=useParams()
  const {loading,products,error}=useSelector((state)=>state.productSlice)
  const [product,setProduct]=useState({})
  const dispatch=useDispatch()
  useEffect(()=>{
    const products=JSON.parse(localStorage.getItem("products"))
    setProduct(products?.find(product=>product.id==id))
  },[])
  return (
    <div className='mt-5 container'>
      {
    loading?<div className='text-center mt-5 '><Spinner animation="border" variant="warning" />
        </div>:
      <div className='row mt-3 align-items-center '>
        <div className='col-md-4 '>
          <img style={{height:'400px', width:'100%'}} src={product?.thumbnail} alt="" />
        </div>
        <div className='col-md-2'></div>
        <div className='col-md-6 text-white'>
          <p>PID:{product?.id}</p>
          <h1>{product?.title}</h1>
          <h5 className='fw-bolder'>$ {product?.price}</h5>
          <p style={{textAlign:'justify'}}><span className='fw-bold'>Description: </span> 
          {product?.description}
          </p>
          <div className='d-flex justify-content-between mt-4'>
              <button onClick={()=>dispatch(addToWishList(product))} className='btn btn-outline-light fs-5'>
              <i class="fa-solid fa-heart text-danger "></i>Wishlist
              </button>
              <button className='btn btn-outline-light fs-5'>
              <i class="fa-solid fa-cart-plus text-success "></i>Cart
              </button>
          </div>
        </div>
      </div>
    }
    </div>
  )
}

export default View