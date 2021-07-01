import React, { Component } from 'react';
import cardimg from '../../img/carditem1.jpg';


class CartItem extends Component {
    render() {
        return (
            <div className="col-md-3">
                <div class="card" style={{width: "20rem"}}>
  <img src={cardimg} class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
   
  </div>
</div>
            </div>
        )
    }
}

export default CartItem
