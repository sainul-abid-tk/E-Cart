import React from 'react'

function View() {
  return (
    <div className='mt-5 container'>
      <div className='row mt-3 align-items-center '>
        <div className='col-md-4 '>
          <img style={{height:'400px', width:'100%'}} src="https://i.dummyjson.com/data/products/1/thumbnail.jpg" alt="" />
        </div>
        <div className='col-md-2'></div>
        <div className='col-md-6 text-white'>
          <p>PID:fregrgghfrhgrfhrt</p>
          <h1>Product Title</h1>
          <h5 className='fw-bolder'>$ 560</h5>
          <p style={{textAlign:'justify'}}><span className='fw-bold'>Description: </span> 
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci tempore voluptatibus rerum ducimus reprehenderit exercitationem sunt maiores mollitia veniam. Repellendus quidem ipsum, aspernatur cumque provident sunt officiis dolores placeat itaque.
          </p>
          <div className='d-flex justify-content-between mt-4'>
              <button className='btn btn-outline-light fs-5'>
              <i class="fa-solid fa-heart text-danger "></i>Wishlist
              </button>
              <button className='btn btn-outline-light fs-5'>
              <i class="fa-solid fa-cart-plus text-success "></i>Cart
              </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default View