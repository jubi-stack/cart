import React from 'react'
import { Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <>
    <div className='container-fluid bg-dark text-light p-3'>
        <Row>
            <Col>
            <h3 className='text-light'>Redux Cart</h3>
            <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur repellat optio perspiciatis odit nemo tempore iusto, 
                minima a ipsum rem quae voluptate,
                 reprehenderit sit delectus voluptatibus, aut nobis suscipit voluptatum.</p>
            </Col>
            <Col className='d-flex align-items-center flex-column'>
               <h3 className='text-light'>Links</h3> 
               <p><Link to={'/'} className='text-info'>Landing</Link></p>
               <p><Link to={'/cart'} className='text-info'>Cart</Link></p>
               <p><Link to={'/wish'} className='text-info'>Wishlist</Link></p>
            </Col>
            <Col>
                <h2 className='text-light mb-3'>Feedback</h2>
                <textarea name="" id="" className='form-control' placeholder='Enter Feedback'></textarea>
                <button className='btn btn-success mt-4'>Submit</button>
            </Col>
        </Row>
    </div>
    </>
  )
}

export default Footer