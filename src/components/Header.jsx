import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector,useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { searchProduct } from '../redux/slices/productslice';



function Header() {
  const {wishlist}=useSelector((state)=>state.wishlistReducer)
  const {cart}=useSelector((state)=>state.cartReducer)
  const dispatch=useDispatch()

  return (
    <> 
       <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand>
            <Link to={'/'} style={{textDecoration:"none"}}>
            <i className="fa-solid fa-cart-shopping fa-xl text-dark"></i>
            {' '}
            ReduxCart
            </Link>
          </Navbar.Brand>
          <input type="search" className='form-control w-25 border border-2 border-dark' placeholder='Search items' onChange={(e)=>{dispatch(searchProduct(e.target.value))}}/>
          <div>
            <Link className='btn btn-outline-dark me-4' to={'/wish'}>
            <i className="fa-solid fa-heart text-danger"></i>{' '}
            Wishlist{' '}
            <span className='badge bg-dark'>{wishlist?.length}</span>
            </Link>
            <Link className='btn btn-outline-dark' to={'/cart'}>
            <i className="fa-solid fa-cart-shopping text-success"></i>{' '}
            Cart{' '}
            <span className='badge bg-dark'>{cart?.length}</span>
            </Link>
          </div>
        </Container>
      </Navbar>
    </>
  )
}

export default Header