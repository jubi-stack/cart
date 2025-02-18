import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { useSelector,useDispatch } from 'react-redux'
import { removeFromCart } from '../Redux/slices/cartSlice'
import { increaseQty,decreaseQty ,checkout} from '../Redux/slices/cartSlice'


function Cart() {

    
    const { cart } = useSelector(state => state.cartReducer)
    const dispatch=useDispatch()
  return (
    <>
    <div className="container-fluid p-2">
        <h2 className="mb-4">Cart Summery</h2>
        <Row>
            <Col lg={9}>
            {
                cart.length > 0 ?


                <table className="table table-bordered border-dark">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Image</th>
                        <th>Unit Price</th>
                        <th>Quantity</th>
                        <th>Total Price</th>
                        <th>...</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cart?.map(item=>(
                            <tr>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>
                            <img src={item.thumbnail} width={'300px'} alt="" />
                        </td>
                        <td>{item.price} RS </td>
                        <td>
                            <button className="btn" onClick={()=>dispatch(increaseQty(item.id))}>+</button>
                            <span className="border border-1 border-dark rounded p-3">{item.quantity}</span>
                            <button className="btn" onClick={()=>dispatch(decreaseQty(item.id))}>-</button>

                        </td>
                        <td>
                            {item.price * item.quantity}
                        </td>
                        <td>
                            <button className='btn'onClick={()=>(dispatch(removeFromCart(item.id)))}>
                            <i class="fa-solid fa-trash text-danger"></i>
                            </button>
                        </td>
                    </tr>
                        ))
                    }
                   
                </tbody>
            </table>
            
            :
            <h2>No Items Added Yet!!</h2>
                }
            </Col>

        <Col lg={3}>
        <div className="border border-3 rounded shadow bg-light p-4">
          <h4>Total Amount: {Math.ceil(cart?.reduce((prev,item)=>prev+(item.quantity*item.price),0))}</h4>
          <h4>Total Product: {cart?.length}</h4>
          <div className="d-grid">
          <button className="btn btn-success" onClick={()=>dispatch(checkout())}>Checkout</button>
          </div>
        </div>
        </Col>

        </Row>
    </div>
    </>
  )
}

export default Cart