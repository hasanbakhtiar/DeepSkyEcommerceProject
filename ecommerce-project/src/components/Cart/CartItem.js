import React from 'react';
import {useCart} from 'react-use-cart'



const CartItem = (props) => {

    const {addItem} = useCart();

    const added = () => {
      addItem(props.item)
      alert("Added Successfuly!")
    }
        return (
            <div className="col-lg-3 col-md-6 col-sm-12 mt-2">
                <div class="card" style={{ width: "20rem" }}>
                    <img src={props.img} class="card-img-top" alt="..." />
                    <div className="card-hover">
                        <div className="addtocart"><a onClick={added} title="Add to Cart"><i class="fas fa-cart-plus"></i></a></div>
                        <div className="addtowishlist"><a title="Add to Wishlist"><i class="far fa-heart"></i></a></div>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">{props.title}</h5>
                        <p class="card-text"><span>${props.price}.00</span> <del>{props.pricedel}</del>  </p>
                    </div>
                </div>
            </div>
        )
    
}

export default CartItem
