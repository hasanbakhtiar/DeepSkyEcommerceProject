import React, { Component } from 'react'
import CartItem from './CartItem';

class CartContainer extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row mt-3">
                        
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />


                    </div>

                    <div className="row mt-3">
                        
                        <CartItem />
                        <CartItem />
                        <CartItem />
                        <CartItem />
    
    
                        </div>
                    </div>

            </div>
        )
    }
}

export default CartContainer
