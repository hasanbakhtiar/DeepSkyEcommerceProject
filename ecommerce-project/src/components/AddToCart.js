import React from 'react'
import { useCart } from 'react-use-cart'

const AddToCart = () => {
    const {
        isEmpty,
        items,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart } = useCart();

    if (isEmpty) return <h1 className="text-center">Your Cart is Empty</h1>
    return (
        <div className="container">
            <div className="row main">
            <table className=" d-flex align-items-center justify-content-center  table table-light table-hover m-0">
                        <tbody>
                        {items.map((item,index)=>{
                            return(
                            <tr key={index}>
                                <td>
                                    <img src={item.img} style={{height: '10rem'}} />
                                </td>
                                <td>{item.title}</td>
                                <td>{item.price}</td>
                                <td>Quantity:({item.quantity})</td>
                                <td>
                                    <button className="btn btn-success ms-2" 
                                    onClick={()=> updateItemQuantity(item.id, item.quantity -1)}>-</button>
                                    <button className="btn btn-success ms-2"
                                    onClick={()=> updateItemQuantity(item.id, item.quantity +1)}>+</button>
                                    <button className="btn btn-danger ms-2"
                                    onClick={()=> removeItem(item.id)}>Remove Item</button>
                                </td>
                            </tr>
                            )
                        })}
                        </tbody>
                    </table>

                <div className="col-auto ms-auto d-flex align-items-center justify-content-center w-100">
                    <h2>Total Price: ${cartTotal}</h2>
                </div>
                <div className="col-auto ms-auto d-flex align-items-center justify-content-center w-100">
                    <button className="btn btn-danger m-2" onClick={() => emptyCart()}>Clear Cart</button>
                    <button className="btn btn-success">Buy Now</button>
                </div>
            </div>
        </div>
    )
}

export default AddToCart

