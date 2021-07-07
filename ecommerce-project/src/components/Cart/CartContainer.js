import React, { Component } from 'react'
import CartItem from './CartItem';
import CartData from './CartData';

class CartContainer extends Component {
    render() {
        return (
            <div>
                <div className="container pt-4">
                    <div className="row mt-3">

                        {CartData.productData.map((item, index) => {
                            return (
                                <CartItem img={item.img}
                                    title={item.title}
                                    price={item.price}
                                    pricedel={item.pricedel}
                                    item={item}
                                    key={index}
                                />
                            )
                        })}



                    </div>


                </div>

            </div>
        )
    }
}

export default CartContainer
