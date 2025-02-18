import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { removeFromWishlist } from '../redux/slices/wishlistSlice'
import { addToCart } from '../redux/slices/cartSlice';


function Wishlist() {

    const {wishlist}=useSelector(state=>state.wishlistReducer)
    const dispatch=useDispatch()


  return (
    <>
    <h1 className='my-5'>Wishlist</h1>
    <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">

                        {
                            wishlist.length>0 ?
                            <>
                            {
                                wishlist.map(item=>(
                                    <div className="col mb-5">
                                    <div className="card h-100">
                                        <Link to={`/product/${item.id}`}>
                                        <img className="card-img-top" src={item.thumbnail} alt="..." />
                                        </Link>
                                        <div className="card-body p-4">
                                            <div className="text-center">
                                                <h5 className="fw-bolder">{item.title.slice(0,10)}...</h5>
                                                {item.price}
                                            </div>
                                        </div>
                                        <div className="card-footer p-4 d-flex justify-content-between pt-0 border-top-0 bg-transparent">
                                            <button className='btn' onClick={()=>dispatch(addToCart(item))}>
                                                <i className="fa-solid fa-cart-plus text-success fa-lg"></i>
                                            </button>
            
                                            <button className='btn'onClick={()=>(dispatch(removeFromWishlist(item.id)))}>
                                            <i className="fa-solid fa-heart-circle-xmark fa-lg text-danger"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                ))
                            }
                            
                            </>
                                                       :
                                   <h2>Wishlist Empty!!</h2>
                            
                        }
                

                    
                    </div>
                    </div>
                    </section>
    </>
  )
}

export default Wishlist